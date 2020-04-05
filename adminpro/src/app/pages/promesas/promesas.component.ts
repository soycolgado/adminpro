import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarTres().then((respuesta) => {
      console.log('Promesa terminada ' + respuesta);
    }).catch((error)=>{
      console.log('Error al realizar la promesa');
    });

  }

  ngOnInit() {
  }


  contarTres(){
    let promesa = new Promise((resolve, reject)=>{
      
      let contador = 0;

      let intervalo = setInterval(()=>{
        
        contador+=1;
        console.log(contador);

        if(contador === 3){
          resolve('Se termino!!!');
          clearInterval(intervalo);
        }


      },1000);


    });
    return promesa;
  }
}
