import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default-dark'
  }

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
   }

  guardarAjustes(){
    console.log('Guardando en el localStorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes(){
    if(localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      console.log('Cargando del localstorage');
      this.aplicandoAjustes(this.ajustes.tema);
    }else{
      console.log('Usando valores por defecto');
    }
  }

  aplicandoAjustes(tema: string){
    let url = `assets/css/colors/${tema}.css`;
    // document.getElementById('tema').setAttribute('href', url);
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }

}

interface Ajustes{
  temaUrl: string;
  tema: string;
}
