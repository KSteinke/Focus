import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-button',
  imports: [],
  templateUrl: './text-button.html',
  styleUrl: './text-button.scss'
})
export class TextButton {
  @Input() TextButtonModel! : TextButtonModel;

  @Output() clickEvent = new EventEmitter(true);

  buttonCicked()
  {
    this.clickEvent.emit();
  }
}

export interface TextButtonModel
{
  IconPath : string;
  Text : string;
}
