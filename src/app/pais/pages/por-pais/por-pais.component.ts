import { Component, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer
      }
    `
  ]
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  paises: Paises[] = [];
  paisesSugeridos: Paises[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscarPorPais(termino: string) {
    this.mostrarSugerencias = false;
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPais(termino)
    .subscribe(
      ( paises ) => {
        console.log(paises);
        this.paises = paises;
        console.log(this.paises); 
      },
      (err) => { 
        this.hayError = true;
        this.paises = [];
      }
    )
  }

  sugerencias(sugerencia: string) {
    this.hayError = false;
    this.termino = sugerencia;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(sugerencia)
    .subscribe(
      paises => this.paisesSugeridos = paises.splice(0, 5), 
      err => this.paisesSugeridos = []
    )
  }

  buscarSugerido(termino: string) {
    this.buscarPorPais(termino);
  }

}
