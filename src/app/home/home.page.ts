import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  audioPlayer: HTMLAudioElement = new Audio();  // Elemento audio HTML5

  constructor() {}

  playAudio(buttonNumber: number) {
    const audioFile = `assets/audio${buttonNumber}.ogg`;  // Percorso del file audio nell'asset
    this.audioPlayer.src = audioFile;
    this.audioPlayer.load();
    this.audioPlayer.play();
  }
}
