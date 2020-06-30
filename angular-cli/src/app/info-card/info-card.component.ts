import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {iif, interval, Observable, of, Subject, timer} from "rxjs";
import {delay, delayWhen, map, mergeMap, repeatWhen, switchMap, takeUntil, takeWhile, tap} from "rxjs/operators";

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  public output: string;

  private stopPolling$ = new Subject();
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.monitorTaskCompletionByPolling().pipe(
      takeUntil(this.stopPolling$)
    ).subscribe(output => this.output = JSON.stringify(output));
  }

  monitorTaskCompletionByPolling(customDelayPeriod?: number): Observable<any> {
    const delayPeriod = customDelayPeriod ? customDelayPeriod : 200;
    return this.getData().pipe(
        switchMap(taskInfo => {
          return iif( () => this.isTaskCompleted(taskInfo),
                    of(taskInfo),
                    timer(delayPeriod).pipe(
                      switchMap( () => this.monitorTaskCompletionByPolling(delayPeriod * 2))
                    ));
        })
    );
  }

  isTaskCompleted(result: any) {
    return !!result;
  }

  private limit: number = 0;
  getData() {
    console.log("this.limit is " + this.limit)
    if (++this.limit <= 30) {
      return of(null);
    }
    return this.http.get("assets/data.json");
  }

  onAction1() {
    this.stopPolling$.next(true);
  }

}
