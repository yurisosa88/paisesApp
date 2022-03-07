import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  termino: string = '';
  @Output() onEnter = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe(
      (value) => {
        this.onDebounce.emit(value);
      }
    )
  }

  buscarPais() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next( this.termino )
  }

}
