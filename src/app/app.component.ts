import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Sisabel';
  audio!: HTMLAudioElement;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.audio = new Audio();
      this.audio.src = 'assets/audio/dream-lofi.mp3';
      this.audio.loop = true;
      this.audio.volume = 0.1;

      document.addEventListener('click', () => {
        this.audio.play().catch(err => {
          console.warn('Autoplay bloqueado:', err);
        });
      }, { once: true });
    }
  }
}

