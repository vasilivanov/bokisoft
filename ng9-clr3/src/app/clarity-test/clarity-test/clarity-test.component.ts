import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-clarity-test',
  templateUrl: './clarity-test.component.html',
  styleUrls: ['./clarity-test.component.scss'],
})
export class ClarityTestComponent implements OnInit {

  constructor() { }

  positionForm = new FormGroup({"position": new FormControl('')});

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

    this.positionForm.get('position').valueChanges.subscribe((value: string) => {

    });
  }

  toMegabytes(valueInBytes: any) {
    console.log('toMegabytes function transforming');
    return (valueInBytes / (1024*1024)).toFixed(2).toString() + ' MB';
  }

  validate() {
    console.log('Validate');
    of(false).pipe(
      switchMap(() => this.doSomething(null))
    ).subscribe((result) => { console.log('Aaand the result is...' + result)})
  }

  doSomething(vmId: string | null): Observable<boolean> {
    if (!vmId) {
      return throwError(new Error('vmId is required'));
      //throw new Error('vmId is required');
    } else {
      return of(true);
    }
  }


}
