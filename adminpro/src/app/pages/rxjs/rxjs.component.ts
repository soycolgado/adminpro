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

    this.regresaObservable().subscribe(
      (data)=>{
        console.log(data);
      },(error) => {
        console.error('Error: ', error);
      },()=>{
        console.log('Observador completado');
      }
    );
    // let obs = new Observable(observer => {
    //   let contador = 0;

    //   let intervalo = setInterval(()=> {
        
    //     contador+=1;
    //     observer.next(contador);
        
    //     if(contador === 3 ){
    //       clearInterval(intervalo);
    //       observer.complete();
    //     }
  
    //     if(contador === 2){
    //       clearInterval(intervalo);
    //       observer.error('Auxilio');
    //     }

    //   },1000);
    // });

    // obs.pipe(
    //   retry()
    // ).subscribe(data => {
    //   console.log('Subs: ' + data);
    // },error => {
    //   console.log('Error al recibir la data', error);
    // },()=>{
    //   console.log('Ya finalizo el subscribe');
    // });

  }

  ngOnInit() {
  }

  regresaObservable(): Observable<any>{
    const obs = new Observable((observer: Subscriber<any>) => {
        
      let contador = 0;

      let intervalo = setInterval(()=>{
        contador+=1;
        observer.next(contador);
        
        if(contador === 3){
          clearInterval(intervalo);
          observer.complete();
        }

        // if(contador === 2){
        //   observer.error('Finalizado inesperadamente');
        // }

      },1000);
  

    });

    return obs;

  }

}
