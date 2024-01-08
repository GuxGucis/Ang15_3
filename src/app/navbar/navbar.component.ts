import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private readonly router: Router){  }

  goToReactive(): void {
    this.router.navigate(['contact-reactive'],  {queryParams: {name: 'GugaLink'}})
  }

  goToTemplate(): void {
    this.router.navigate(['contact', '007']); //Por ejemplo el '007' puede ser el ID del cliente, es decir son rutas que pueden ser dinamicas dado que esto nos llevara a /contact/007
  }

}
