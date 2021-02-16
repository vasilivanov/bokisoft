import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.scss']
})
export class FaInputComponent implements OnInit {

  constructor() { }

  @Input() icon: string = 'calendar';
  @Output() value = new EventEmitter<string>();
  inputFocus = false;

  get classes() {
    const cssClasses = {
      fa: true
    };
    cssClasses['fa-' + this.icon] = true;
    return cssClasses;
  }

  @HostBinding('class.focus')
  get focus() {
    return this.inputFocus;
  }

  ngOnInit(): void {}
}
