import { Component, Injectable, OnInit } from '@angular/core';

@Injectable()
export class SideNavService {

}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}


