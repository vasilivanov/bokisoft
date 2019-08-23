import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  public output: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("assets/data.json").subscribe((value: any) => {
      value.id = 555;
      this.output = JSON.stringify(value);
      this.http.put("assets", value).subscribe();
    }, (error: any) => {
      this.output = JSON.stringify(error);
    });
  }

}
