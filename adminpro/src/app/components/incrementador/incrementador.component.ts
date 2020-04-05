import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  
  @ViewChild('txtProgress',{static:false})txtProgress: ElementRef;
  @Input('nombre') leyenda: string = 'leyenda';
  @Input()progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { 
    // console.log(`leyenda: ${this.leyenda}`);
    // console.log(`progreso: ${this.progreso}`);
  }

  ngOnInit() {
    // console.log(`leyenda: ${this.leyenda}`);
    // console.log(`progreso: ${this.progreso}`);

  }

  cambiarValor(valor: number){
    if(this.progreso >= 100 && valor >0){
      this.progreso = 100;
      return;
    }

    if(this.progreso <= 0 && valor < 0){
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.txtProgress.nativeElement.focus();
    this.cambioValor.emit(this.progreso);
  }

  onChange(evento: number){
    console.log(evento);
    if(evento >=100){
      this.progreso = 100;
    }else if(evento <=0){
      this.progreso = 0;
    }else{
      this.progreso = evento;
    }
    console.log(this.txtProgress);
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);
  }

}
