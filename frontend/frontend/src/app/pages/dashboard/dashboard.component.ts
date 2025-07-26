import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'; // Por si usas íconos

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule, // <- Necesario para mat-form-field
    MatInputModule,     // <- Necesario para input matInput
    MatIconModule       // <- Opcional si usas iconos como mat-icon
  ]
})
export class DashboardComponent implements OnInit {
  usuarios: any[] = [];
  editandoId: string | null = null;
  usuarioEditado: any = {};

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.userService.getUsuarios().subscribe((res) => {
      this.usuarios = res;
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  editar(usuario: any): void {
    this.editandoId = usuario._id;
    this.usuarioEditado = { ...usuario };
  }

  cancelarEdicion(): void {
    this.editandoId = null;
    this.usuarioEditado = {};
  }

  guardarCambios(): void {
    if (!this.editandoId) return;
    this.userService.actualizarUsuario(this.editandoId, this.usuarioEditado).subscribe(() => {
      this.cargarUsuarios();
      this.cancelarEdicion();
    });
  }

  eliminar(id: string): void {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.userService.eliminarUsuario(id).subscribe(() => {
        this.cargarUsuarios();
      });
    }
  }
}







