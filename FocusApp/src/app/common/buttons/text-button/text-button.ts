import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-button',
  imports: [],
  templateUrl: './text-button.html',
  styleUrl: './text-button.scss'
})
export class TextButton {
  @Input() public IconPath: String = "";

  public Name: String = "";
  buttonCicked()
  {

  }
}
