import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clarity-test',
  templateUrl: './clarity-test.component.html',
  styleUrls: ['./clarity-test.component.scss'],
})
export class ClarityTestComponent implements OnInit {

  constructor() { }

  itemToFind: any;

  itemMap: Map<string, any> = new Map([
    ['first', { name: 'Pesho', age: 4}],
    ['second', { name: 'Kiro', age: 5}],
    ['third', { name: 'Spas', age: 14}],
    ['forth', { name: 'Toncho', age: 7}]
  ]);

  ngOnInit(): void {
    for (let [key, value] of this.itemMap.entries()) {
      console.log('value ' + JSON.stringify(value));
      if (value.name === 'Spas') {
        this.itemToFind = value;
        return;
      }
    }
  }

  toMegabytes(valueInBytes: any) {
    console.log('toMegabytes function transforming');
    return (valueInBytes / (1024*1024)).toFixed(2).toString() + ' MB';
  }

}
