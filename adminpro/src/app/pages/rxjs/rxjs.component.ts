import { Component, OnInit } from "@angular/core";
import { Observable, Subscriber } from "rxjs";
import { retry, map } from "rxjs/operators";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styles: [],
})
export class RxjsComponent implements OnInit {
  constructor() {
    this.regresarObservable().subscribe(
      (numero) => {
        console.log('Subs: ', numero);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Completado!!!!');
      }
    );
  }
  ngOnInit() {}

  regresarObservable(): Observable<any> {
    return new Observable((observer) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador++;
        const salida = {
          valor: contador
        }
        observer.next(salida);
        

        if (contador === 3) {
          clearInterval(intervalo); 
          observer.complete();
        }

        // if (contador === 2) {
        //   observer.error('Auxilio');
        // }

      }, 1000);
    }).pipe(map((resp: any) => {
      return resp.valor;
    }));
  }
}
