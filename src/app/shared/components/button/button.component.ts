import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() value: string | number = 'holaaa'
  @Output() clickEvent: EventEmitter<void> = new EventEmitter()
}
