import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '/home/andres/Documentos/github/Prueba-t-cnica-autenticaci-n-de-usuarios/frontend/frontend/src/app/services/auth.service';
import { Router } from '@angular/router';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class RegistroComponent {
  formulario!: FormGroup;

  constructor(

    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.authService.registrar(this.formulario.value).subscribe({
        next: (res) => {
          console.log('Usuario registrado:', res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.error('Error en el registro:', err);
          alert('Error al registrar usuario: ' + err.error?.msg);
        }
      });
    }
  }
}

