import { Injectable } from '@angular/core';
import {SimpleTextService} from "../shared-lib/interfaces/simple-test.interface";

@Injectable({
  providedIn: 'root'
})
export class CustomBSimpleTextService implements SimpleTextService{
  getText(): string {
    return "This is custom text from module B";
  }

  constructor() { }
}
