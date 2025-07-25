import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router) {}

  estaAutenticado(): boolean {
    return !!localStorage.getItem('token');
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}


