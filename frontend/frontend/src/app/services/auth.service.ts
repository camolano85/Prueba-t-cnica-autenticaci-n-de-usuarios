import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  registrar(usuario: { nombre: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, usuario);
  }

  login(datos: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, datos);
  }

  // ✅ Este método es necesario para que el interceptor funcione correctamente
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}



