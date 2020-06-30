import { Component, OnInit } from '@angular/core';
import {SIMPLE_TEXT_SERVICE_TOKEN} from "../../shared-lib/interfaces/simple-test.interface";
import {CustomASimpleTextService} from "../custom-a-simple-text.service";

@Component({
  selector: 'app-custom-a-text',
  templateUrl: './custom-a-text.component.html',
  styleUrls: ['./custom-a-text.component.css'],
  providers: [
    {provide: SIMPLE_TEXT_SERVICE_TOKEN, useClass: CustomASimpleTextService}
  ]
})
export class CustomATextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
