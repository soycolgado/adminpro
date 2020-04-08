import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() { 
    let obs = new Observable(observer => {
      let contador = 0;

     let interval = setInterval( ()=> {
        contador++;
        observer.next(contador);
        if(contador === 3){
          clearInterval(interval);
          observer.complete();
        }

        if(contador === 2){
          observer.error('Auxilio!!!');
        }

    },1000);

    });

    obs.subscribe(numero=>{
      console.log('Subs: ',numero);
    },error => {
      console.log(error);
    },()=>{
      console.log('Completado!!!!');
    });

  }
  ngOnInit() {
  }


}