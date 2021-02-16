import { Component, OnInit } from '@angular/core';
import * as modeljs from './model';

@Component({
  selector: 'app-testjs',
  templateUrl: './testjs.component.html',
  styleUrls: ['./testjs.component.scss']
})
export class TestjsComponent implements OnInit {

  person: modeljs.Person;
  teacher: modeljs.Teacher;

  constructor() { }

  ngOnInit(): void {
    this.person = new modeljs.Person('Vasko', 37);
    this.teacher = new modeljs.Teacher('Hristo', 55, 'Maths');
  }

  instanceOfPerson(person: modeljs.Person) {
    return `${person.name} is instanceof Person? ${person instanceof modeljs.Person}`;
  }

  instanceOfTeacher(person: modeljs.Person) {
    return `${person.name} is instanceof Teacher? ${person instanceof modeljs.Teacher}`;
  }

  getOwnPropertyNames(object: any) {
    return Object.getOwnPropertyNames(object);
  }

}
