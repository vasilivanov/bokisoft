import {Component, Inject, OnInit} from '@angular/core';
import {SIMPLE_TEXT_SERVICE_TOKEN, SimpleTextService} from "../interfaces/simple-test.interface";

@Component({
  selector: 'app-simple-text',
  templateUrl: './simple-text.component.html',
  styleUrls: ['./simple-text.component.css']
})
export class SimpleTextComponent implements OnInit {

  public simpleText: string;

  constructor(@Inject(SIMPLE_TEXT_SERVICE_TOKEN) public simpleTextService: SimpleTextService) { }

  ngOnInit() {
    this.simpleText = this.simpleTextService.getText();
  }

}
