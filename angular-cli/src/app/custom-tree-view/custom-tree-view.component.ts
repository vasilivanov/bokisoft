import { Component, OnInit } from '@angular/core';
import { ClrSelectedState } from "@clr/angular";
import { BehaviorSubject, interval, Observable, of, Subject } from "rxjs";
import { map, take, tap } from "rxjs/operators";
import { TreeNode } from "./tree-node";
import { TreeData } from "./tree-data";

@Component({
  selector: 'app-custom-tree-view',
  templateUrl: './custom-tree-view.component.html',
  styleUrls: ['./custom-tree-view.component.css']
})
export class CustomTreeViewComponent implements OnInit {

  constructor() { }
  root: TreeNode[];
  root$: Subject<any[]> = new BehaviorSubject<TreeNode[]>([]);

  nodeToParent: any = {};

  getChildren = (node: TreeNode) => {
    return node.getChildren$().pipe(
      tap(children => children.forEach(c => this.nodeToParent[c.name] = node)));
  };

  ngOnInit() {
    this.root = TreeData.data.map(d => new TreeNode(d));
    this.root$.next(this.root);
  }

  isRoot(node) {
    return this.nodeToParent[node.name];
  }

  serial: number = 0;
  add(node) {
    const newData = {
      name: `${node.name} - ${this.serial++}`,
      selected: ClrSelectedState.UNSELECTED,
      hasChildren: false,
      children: []
    };
    node.addChild(new TreeNode(newData));
  }

  remove(node) {
    const parentNode = this.nodeToParent[node.name];
    if (parentNode) {
      parentNode.removeChild(node);
    }

    const i = this.root.findIndex(t => t.name === node.name);
    if (i >= 0) {
      this.root[i].destroy();
      this.root.splice(i, 1);
      this.root$.next(this.root);
    }
  }
}
