import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paises } from '../interfaces/paises.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiURL: string = 'http://api.countrylayer.com/v2';
  //private accesKey: string = '1307d68c905f719da45435d1c1231d16';
  get httpParams() {
    return new HttpParams()
    .set('access_key', '1307d68c905f719da45435d1c1231d16');
  }
  

  constructor(private http: HttpClient) { }

buscarPais(termino: string): Observable<Paises[]> {

  const url = `${ this.apiURL }/name/${termino}`;

  return this.http.get<Paises[]>( url, { params: this.httpParams } );

}

buscarPaisPorCapital(termino: string) {

  const url = `${ this.apiURL }/capital/${termino}`;

  return this.http.get<Paises[]>( url, { params: this.httpParams } );
}

buscarPaisPorRegion(termino: string): Observable<Paises[]> {

  const url = `${ this.apiURL }/region/${termino}`;

  return this.http.get<Paises[]>( url, { params: this.httpParams } );
}

buscarPaisPorAlphaCode( id: string) {

  const url = `${ this.apiURL }/alpha/${id}`;

  return this.http.get<Paises>( url, { params: this.httpParams } );
}

}
