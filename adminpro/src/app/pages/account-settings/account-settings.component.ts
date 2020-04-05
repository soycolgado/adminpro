import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document,
              public _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any){

    console.log(tema);
  
    this.aplicandoCheck(link);

    this._ajustes.aplicandoAjustes(tema);

  }

  aplicandoCheck(link: any){
    console.log(link);
    
    let selectores: any = document.getElementsByClassName('selector');
    
    for(let selector of selectores){
      selector.classList.remove('working');
    }

    link.classList.add('working');

  }

  colocarCheck(){
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;
    for(let ref of selectores){
      if(ref.getAttribute('data-theme') === tema){
        ref.classList.add('working');

      }
    }
  }

}
