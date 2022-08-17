import { Component, Input } from '@angular/core';
import { Paises } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent {

  @Input() paises : Paises[] = [];
  
}
