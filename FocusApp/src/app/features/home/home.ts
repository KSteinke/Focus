import { AfterViewInit, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home  implements AfterViewInit {
    ngAfterViewInit(): void {
    // sprawdzamy czy Tally został załadowany
    if ((window as any).Tally) {
      (window as any).Tally.loadEmbeds();
    }
  }
}
