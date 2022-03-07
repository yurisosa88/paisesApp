import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paises } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Paises[] = [];

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscarPorCapital(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPaisPorCapital(termino)
    .subscribe(
      ( paises ) => {
        this.paises = paises;
      },
      (err) => { 
        this.hayError = true;
        this.paises = [];
      }
    )
  }

  sugerencias(sugerencia: string) {
    this.hayError = false;
  }

}
