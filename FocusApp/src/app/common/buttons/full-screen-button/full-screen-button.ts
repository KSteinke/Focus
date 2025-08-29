import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/core';

@Component({
  selector: 'app-full-screen-button',
  imports: [],
  templateUrl: './full-screen-button.html',
  styleUrl: './full-screen-button.scss'
})
export class FullScreenButton {

    constructor(@Inject(DOCUMENT) private document: any) {}
    elem:any;

    ngOnInit() {
      this.elem = document.documentElement;
    }

    togleWindowSize()
    {
       const isFullscreen = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      );
      isFullscreen ? this.closeFullscreen() : this.openFullscreen();
    }

    openFullscreen() {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
    }

  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }
}
