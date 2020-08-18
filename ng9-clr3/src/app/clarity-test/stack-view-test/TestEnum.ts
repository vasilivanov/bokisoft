import { InjectionToken } from "@angular/core";

export enum Token {
  aaa = new InjectionToken<any>("aaa");
  bbb = new InjectionToken<any>("bbb");
}
