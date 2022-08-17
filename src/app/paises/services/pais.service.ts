import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paises } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private api : string = 'https://restcountries.com/v2/';

  constructor( private http : HttpClient ) { }

  buscarPais( termino : string) : Observable<Paises[]> {
    const url : string  = `${ this.api }name/${ termino }`;
    return this.http.get<Paises[]>( url );
  }

  buscarCapital( termino : string) : Observable<Paises[]> {
    const url : string  = `${ this.api }capital/${ termino }`;
    return this.http.get<Paises[]>( url );
  }

  buscarRegion( region : string) : Observable<Paises[]> {
    const url : string  = `${ this.api }region/${ region }`;
    return this.http.get<Paises[]>( url );
  }

  getPaisCodigo( id : string) : Observable<Paises> {
    const url : string  = `${ this.api }alpha/${ id }`;
    return this.http.get<Paises>( url );
  }
}
