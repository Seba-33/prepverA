import { Component, Input } from '@angular/core';
import { Mezzi } from '../Models/driving.model';
import { Rent } from '../Models/rent.model';

@Component({
  selector: 'app-driving-list',
  standalone: true,
  imports: [],
  templateUrl: './driving-list.component.html',
  styleUrl: './driving-list.component.css'
})
export class DrivingListComponent {
  @Input() mezz! : Mezzi
  @Input() nol! : Rent[]

  noleggia(nNoleggi: HTMLInputElement){
    
    this.nol.push(new Rent(this.mezz.tipo, this.mezz.descrizione, this.mezz.tariffa, this.mezz.valutazionemedia, nNoleggi.value))
    console.log(this.nol)
  }
}
