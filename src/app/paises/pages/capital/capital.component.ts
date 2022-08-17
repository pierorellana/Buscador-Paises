import { Component } from '@angular/core';
import { Paises } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})

export class CapitalComponent {

  termino: string  = '';
  error : boolean = false;
  paises : Paises[] = [];
  
  constructor( private paisService : PaisService ) { }

  buscar( termino: string ){
    
    this.error = false;
    this.termino = termino;

    this.paisService.buscarCapital( this.termino )
    .subscribe( ( paises ) => {
      this.paises = paises;

    }, ( err ) =>{
      this.error = true;
      this.paises = [];
    });
  }

}
