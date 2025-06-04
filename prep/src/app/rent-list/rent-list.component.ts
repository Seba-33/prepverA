import { Component, Input } from '@angular/core';
import { Rent } from '../Models/rent.model';

@Component({
  selector: 'app-rent-list',
  standalone: true,
  imports: [],
  templateUrl: './rent-list.component.html',
  styleUrl: './rent-list.component.css'
})
export class RentListComponent {
  @Input() veicoli! : Rent
}
