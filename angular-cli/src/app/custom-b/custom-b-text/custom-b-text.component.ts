import { Component, OnInit } from '@angular/core';
import {SIMPLE_TEXT_SERVICE_TOKEN} from "../../shared-lib/interfaces/simple-test.interface";
import {CustomBSimpleTextService} from "../custom-b-simple-text.service";

@Component({
  selector: 'app-custom-b-text',
  templateUrl: './custom-b-text.component.html',
  styleUrls: ['./custom-b-text.component.css'],
  providers: [
    {provide: SIMPLE_TEXT_SERVICE_TOKEN, useClass: CustomBSimpleTextService}
  ]
})
export class CustomBTextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
