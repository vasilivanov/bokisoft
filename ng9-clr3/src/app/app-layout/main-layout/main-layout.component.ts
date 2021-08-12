import { Component, OnInit } from '@angular/core';
import { FaInputService } from '../../projection/fa-input/fa-input.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  providers: [FaInputService]
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
