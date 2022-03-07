import { Component, Input, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  @Input() paises: Paises[] = [];

  constructor() { }

  ngOnInit(): void {
  }

 verPais(index: number) {
   return this.paises[index];
 }

}
