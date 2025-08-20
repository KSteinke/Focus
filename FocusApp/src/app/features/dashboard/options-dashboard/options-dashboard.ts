import { Component, EventEmitter, Output } from '@angular/core';
import { OptionMenuButton } from '../../../common/buttons/option-menu-button/option-menu-button';
import { CommonModule } from '@angular/common';
import { BackgroundSelector } from './background-selector/background-selector';
import { SoundSelector } from './sound-selector/sound-selector';
import { TimerSettingsSelector } from './timer-settings-selector/timer-settings-selector';
import { LocalStorageService } from '../../../core/services/local_storage_service/local-storage-service';
import { ContactSelector } from './contact-selector/contact-selector';
import { CloseButton } from '../../../common/buttons/close-button/close-button';


@Component({
  standalone: true,
  selector: 'app-options-dashboard',
  imports: [OptionMenuButton, CommonModule, BackgroundSelector, SoundSelector, TimerSettingsSelector, ContactSelector, CloseButton],
  templateUrl: './options-dashboard.html',
  styleUrl: './options-dashboard.scss'
})
export class OptionsDashboard {
constructor(private localStorageService: LocalStorageService)
{

}

  public Buttons = [
    {
      name: "Backgrounds", 
      iconPath: "M128 160C128 124.7 156.7 96 192 96L512 96C547.3 96 576 124.7 576 160L576 416C576 451.3 547.3 480 512 480L192 480C156.7 480 128 451.3 128 416L128 160zM56 192C69.3 192 80 202.7 80 216L80 512C80 520.8 87.2 528 96 528L456 528C469.3 528 480 538.7 480 552C480 565.3 469.3 576 456 576L96 576C60.7 576 32 547.3 32 512L32 216C32 202.7 42.7 192 56 192zM224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160C206.3 160 192 174.3 192 192C192 209.7 206.3 224 224 224zM420.5 235.5C416.1 228.4 408.4 224 400 224C391.6 224 383.9 228.4 379.5 235.5L323.2 327.6L298.7 297C294.1 291.3 287.3 288 280 288C272.7 288 265.8 291.3 261.3 297L197.3 377C191.5 384.2 190.4 394.1 194.4 402.4C198.4 410.7 206.8 416 216 416L488 416C496.7 416 504.7 411.3 508.9 403.7C513.1 396.1 513 386.9 508.4 379.4L420.4 235.4z"
    }, 
    {
      name: "Sounds", 
      iconPath: "M160 288C160 199.6 231.6 128 320 128C408.4 128 480 199.6 480 288L480 325.5C470 322 459.2 320 448 320L432 320C405.5 320 384 341.5 384 368L384 496C384 522.5 405.5 544 432 544L448 544C501 544 544 501 544 448L544 288C544 164.3 443.7 64 320 64C196.3 64 96 164.3 96 288L96 448C96 501 139 544 192 544L208 544C234.5 544 256 522.5 256 496L256 368C256 341.5 234.5 320 208 320L192 320C180.8 320 170 321.9 160 325.5L160 288z"
    },
    {
      name: "Timer options",
      iconPath: "M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"
    },
    {
      name: "Contact",
      iconPath: "M376 32C504.1 32 608 135.9 608 264C608 277.3 597.3 288 584 288C570.7 288 560 277.3 560 264C560 162.4 477.6 80 376 80C362.7 80 352 69.3 352 56C352 42.7 362.7 32 376 32zM384 224C401.7 224 416 238.3 416 256C416 273.7 401.7 288 384 288C366.3 288 352 273.7 352 256C352 238.3 366.3 224 384 224zM352 152C352 138.7 362.7 128 376 128C451.1 128 512 188.9 512 264C512 277.3 501.3 288 488 288C474.7 288 464 277.3 464 264C464 215.4 424.6 176 376 176C362.7 176 352 165.3 352 152zM176.1 65.4C195.8 60 216.4 70.1 224.2 88.9L264.7 186.2C271.6 202.7 266.8 221.8 252.9 233.2L208.8 269.3C241.3 340.9 297.8 399.3 368.1 434.2L406.7 387C418 373.1 437.1 368.4 453.7 375.2L551 415.8C569.8 423.6 579.9 444.2 574.5 463.9L573 469.4C555.4 534.1 492.9 589.3 416.6 573.2C241.6 536.1 103.9 398.4 66.8 223.4C50.7 147.1 105.9 84.6 170.5 66.9L176 65.4z"
    }
  ];

  ngOnInit()
  {
    let currentOptionsCard : string | null = this.localStorageService.getItem("CurrentOptionsCard");
    currentOptionsCard != null ? this.CurrentOptionsCard = currentOptionsCard : null ;
  }



  public CurrentOptionsCard: string = "Backgrounds";

  @Output() clickEvent = new EventEmitter(true);

  async closeOptionsDashboard()
  {
    this.clickEvent.emit();
  }
 
  menuButtonClicked(value: string)
  {
    this.CurrentOptionsCard = value;
    this.localStorageService.setItem("CurrentOptionsCard", value);
  }
}
