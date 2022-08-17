import { Component } from '@angular/core';
import { Paises } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})

export class RegionComponent {

  regiones : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva : string = '';
  paises : Paises[] = [];
  
  constructor( private paisService : PaisService ) { }

  getClass( region : string) : string {
    return ( region === this.regionActiva ) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activar( region : string ){

    if( region === this.regionActiva ){ return };

    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion( region )
    .subscribe(  paises  => this.paises = paises );
  }
}