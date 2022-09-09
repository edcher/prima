import { Component, VERSION } from '@angular/core';
import { TheaterService } from './theater.service';

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
  key: string = "";
  platea: Array<any> = new Array(7).fill('').map(() => new Array(10).fill('x'));
  palchetto: Array<any> = new Array(4).fill('').map(() => new Array(6).fill('x'));

  constructor(private service: TheaterService) { }

  cerca_spettacolo(chiave: string) {
    if (chiave !== '') {
      this.service.get_spettacolo(chiave).subscribe({
        next: (x: any) => {
          const prenotazione = JSON.parse(x);
          this.platea = prenotazione.slice(0, 7);
          this.palchetto = prenotazione.slice(7);
          this.key = chiave;
        },
        error: (err: any) => console.error(`Errore nell'observer: ${JSON.stringify(err)}`)
      });
    }
    else alert("Inserisci una chiave valida.") // se non viene inserito niente nel campo input
  }

}
