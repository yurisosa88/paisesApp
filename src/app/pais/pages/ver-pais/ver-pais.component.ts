import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Paises } from '../../interfaces/paises.interface';
import { switchMap, tap } from 'rxjs/operators'

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!: Paises;

  constructor( private activatedRoute: ActivatedRoute, 
                private paisService: PaisService ) { }

  ngOnInit( ): void {

    // this.activatedRoute.params.subscribe(
    //   ({ id }) => {
    //     this.paisService.buscarPaisPorAlphaCode(id)
    // .subscribe(
    //   (pais) => {
    //     this.pais = pais;
    //   }
    // );
    // });

    this.activatedRoute.params.pipe(
      switchMap( ( {id} ) => this.paisService.buscarPaisPorAlphaCode(id) ),
      tap( console.log )
    )
    .subscribe(
      pais => this.pais = pais
    )

  }

}
