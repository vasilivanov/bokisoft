import {
  Component,
  ContentChild,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { InputRefDirective } from './input-ref.directive';

@Component({
  selector: 'app-fa-input-two',
  templateUrl: './fa-input-two.component.html',
  styleUrls: ['./fa-input-two.component.scss']
})
export class FaInputTwoComponent implements OnInit {


  constructor() { }

  @Input() icon: string = 'calendar';
  @Output() value = new EventEmitter<string>();

  @ContentChild(InputRefDirective)
  inputRef: InputRefDirective;

  get classes() {
    const cssClasses = {
      fa: true
    };
    cssClasses['fa-' + this.icon] = true;
    return cssClasses;
  }

  @HostBinding('class.focus')
  get focus() {
    return this.inputRef ? this.inputRef.focus : false;
  }

  ngOnInit(): void {
  }
}
