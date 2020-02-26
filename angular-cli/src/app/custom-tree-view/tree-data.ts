import { ClrSelectedState } from "@clr/angular";

export class TreeData {
  static data = [
    {
      name: "src",
      selected: ClrSelectedState.INDETERMINATE,
      hasChildren: true,
      children: [
        {
          name: "app",
          selected: ClrSelectedState.INDETERMINATE,
          hasChildren: true,
          children: [
            {
              name: "app.component.html",
              hasChildren: false,
              selected: ClrSelectedState.UNSELECTED
            },
            {
              name: "app.component.ts",
              hasChildren: false,
              selected: ClrSelectedState.UNSELECTED
            },
            {
              name: "app.module.ts",
              hasChildren: false,
              selected: ClrSelectedState.SELECTED
            },
            {
              name: "app.routing.ts",
              hasChildren: false,
              selected: ClrSelectedState.UNSELECTED
            }
          ]
        },
        {
          name: "environments",
          selected: ClrSelectedState.SELECTED,
          hasChildren: true,
          children: [
            {
              name: "environments.prod.ts",
              hasChildren: false,
              selected: ClrSelectedState.SELECTED
            },
            {
              name: "environment.ts",
              hasChildren: false,
              selected: ClrSelectedState.SELECTED
            }
          ]
        },
        {
          name: "index.html",
          hasChildren: false,
          selected: ClrSelectedState.UNSELECTED,
        },
        {
          name: "main.ts",
          hasChildren: false,
          selected: ClrSelectedState.UNSELECTED,
        }
      ]
    },
    {
      name: "package.json",
      hasChildren: false,
      selected: ClrSelectedState.UNSELECTED
    },
    {
      name: "tsconfig.json",
      hasChildren: false,
      selected: ClrSelectedState.UNSELECTED
    }
  ];
}
