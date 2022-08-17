import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Paises } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})

export class VerPaisComponent implements OnInit {

  pais!: Paises;

  constructor( private activarRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {

    this.activarRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisCodigo( id )),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais );
    }  
}
