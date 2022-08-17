import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Paises } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})

export class PorPaisComponent {

  termino: string  = '';
  error : boolean = false;
  paises : Paises[] = [];
  paisesSugeridos : Paises[] = [];
  mostrarSugerencia : boolean = false;
  
  constructor( private paisService : PaisService ) { }

  buscar( termino: string ){
    
    this.error = false;
    this.termino = termino;

    this.paisService.buscarPais( this.termino )
    .subscribe( ( paises ) => {
      console.log( paises );
      this.paises = paises;

    }, ( err ) =>{
      this.error = true;
      this.paises = [];
    });
  }

  sugerencias( termino : string){
    this.error = false;
    this.termino = termino;
    this.mostrarSugerencia = true;

    this.paisService.buscarPais( termino )
    .subscribe( paises => this.paisesSugeridos = paises.splice(0,4),
    (err) => this.paisesSugeridos = []
    );
  }

  buscarSugeridos( termino : string){
    this.buscar( termino );
  }
}
