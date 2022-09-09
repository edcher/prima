import { Component, VERSION } from '@angular/core';

class theater {
  key: string;
  palco: Array<any>;
  platea: Array<any>;
  constructor (key: string, palco: Array<any>, platea: Array<any>) {
    this.key = key;
    this.palco = palco;
    this.platea = platea;
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title: string = 'Prenotazioni teatro';
  key: string = "904ac10a";
  platea: Array<any> = new Array(7).fill('').map(() => new Array(10).fill('x'));
  palchetto: Array<any> = new Array(4).fill('').map(() => new Array(6).fill('x'));
  constructor(private service: TheaterService) { }
}
