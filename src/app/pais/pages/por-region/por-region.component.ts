import { Component, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin: 5px
    }
  `]
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  termino: string = '';
  hayError: boolean = false;
  paises: Paises[] = [];

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }

  getClassCSS(region: string): string {
    return (region === this.regionActiva)? 'btn btn-success' : 'btn btn-outline-success';
  }

  activarRegion(region: string) {
    if( region === this.regionActiva ) { return; }

    this.regionActiva = region;
    this.paises = [];
    
    this.paisService.buscarPaisPorRegion(region)
    .subscribe(
      (paises) => {
        this.paises = paises;
      }
    )
  }

  // buscarPorRegion(termino: string) {
  //   this.termino = termino;
  //   this.hayError = false;
  //   this.paisService.buscarPaisPorRegion(termino)
  //   .subscribe(
  //     ( paises ) => {
  //       this.paises = paises;
  //     },
  //     (err) => { 
  //       this.hayError = true;
  //       this.paises = [];
  //     }
  //   )
  // }

  sugerencias(sugerencia: string) {
    this.hayError = false;
  }

}
