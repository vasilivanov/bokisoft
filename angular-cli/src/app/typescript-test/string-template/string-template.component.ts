import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-template',
  templateUrl: './string-template.component.html',
  styleUrls: ['./string-template.component.css']
})
export class StringTemplateComponent implements OnInit {

  @Input()
  name: String;

  @Input()
  age: number;

  stringTemplate: string;
  uppercaseTemplate: string;

  constructor() { }

  ngOnInit(): void {
    this.stringTemplate = `Hello my name is ${this.name} and I am ${this.age} years old`;
  }
}

