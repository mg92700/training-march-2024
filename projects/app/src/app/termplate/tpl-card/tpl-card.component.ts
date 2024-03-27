import { Component } from '@angular/core';
import {MatCard} from '@angular/material/card';

@Component({
  selector: 'app-tpl-card',
  standalone: true,
  imports: [MatCard],
  templateUrl: './tpl-card.component.html',
  styleUrl: './tpl-card.component.css'
})
export class TplCardComponent {

}
