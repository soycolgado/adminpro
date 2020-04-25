import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(public _usuarioService: UsuarioService, public router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this._usuarioService.estaLogueado()) {
      console.log('Paso el guard');
      return true;
    } else {
      console.log('No paso el guard');
      this.router.navigate(['/login']);
      return false;
    }

  }

}
