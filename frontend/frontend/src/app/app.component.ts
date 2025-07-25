import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component'; // ✅ Importa el navbar

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent], // ✅ Incluye el navbar
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
}


