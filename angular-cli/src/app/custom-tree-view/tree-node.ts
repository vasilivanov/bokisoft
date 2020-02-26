import { BehaviorSubject, noop, of, Subject, timer } from "rxjs";
import { ClrSelectedState } from "@clr/angular";
import { TreeData } from "./tree-data";

export class TreeNode {

  name: string;
  selected: ClrSelectedState;
  hasChildren: boolean = false;
  expanded: boolean = false;
  children: TreeNode[] = [];
  children$: Subject<TreeNode[]> = new BehaviorSubject<TreeNode[]>([]);

  constructor(nodeInfo: any) {
    this.name = nodeInfo.name;
    this.hasChildren = nodeInfo.hasChildren;
    this.selected = nodeInfo.selected;
  }

  addChild(node: TreeNode) {
    this.children.push(node);
    this.hasChildren = true;
    this.children$.next(this.children);
  }

  removeChild(node:TreeNode) {
    if (!this.children && !this.children.length) {
      return;
    }
    const i = this.children.findIndex(c => node.name === c.name);
    if (i >= 0) {
      this.children[i].destroy();
      this.children.splice(i, 1);
    }
    this.children$.next(this.children);
  }

  getChildren$(force: boolean = false) {
    console.log(`getChildren for ${this.name}`);
    if (force || this.children.length === 0) {
      const nodeData = TreeNode.findNode(this.name, TreeData.data);
      const childrenData = nodeData && nodeData.children ?
          nodeData.children : [];
      this.children = childrenData.map(t => new TreeNode(t));
    }

    this.hasChildren = this.children.length > 0;
    this.children$.next(this.children);
    return this.children$;
  }

  destroy() {
    console.log('destroying node ' + this.name);
    this.children$.complete();
    let child = this.children.shift();
    while(child) {
      child.destroy();
      child = this.children.shift();
    }
  }

  static findNode(name: string, treeData: any[]): any {
    const nodesToSearch = treeData || [];
    if (!nodesToSearch.length) {
      return undefined;
    }
    let nodeFound = nodesToSearch.find(c => c.name === name);
    if (nodeFound) {
      return nodeFound;
    }

    for (let i = 0; i < nodesToSearch.length; i++) {
      nodeFound = this.findNode(name, nodesToSearch[i].children);
      if (nodeFound) {
        return nodeFound;
      }
    }
    return undefined;
  }
}
