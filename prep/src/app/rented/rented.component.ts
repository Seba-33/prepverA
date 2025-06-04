import { Component, Input } from '@angular/core';
import { Rent } from '../Models/rent.model';

@Component({
  selector: 'app-rented',
  standalone: true,
  imports: [],
  templateUrl: './rented.component.html',
  styleUrl: './rented.component.css'
})
export class RentedComponent {
  @Input() rent! : Rent
}
