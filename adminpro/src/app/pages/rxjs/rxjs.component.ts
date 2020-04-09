import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscriber, Subscription } from "rxjs";
import { retry, map, filter } from "rxjs/operators";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styles: [],
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
     this.subscription = this.regresarObservable().subscribe(
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

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  regresarObservable(): Observable<any> {
    return new Observable((observer) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador++;
        const salida = {
          valor: contador
        }
        observer.next(salida);
        

        // if (contador === 3) {
        //   clearInterval(intervalo); 
        //   observer.complete();
        // }

        // if (contador === 2) {
        //   observer.error('Auxilio');
        // }

      }, 1000);
    }).pipe(map((resp: any) => {
      return resp.valor;
    }),
    filter((valor, index)=>{
      if((valor % 2) === 1){
        return true;
      }else{
        return false;
      }
    }));
  }
}
