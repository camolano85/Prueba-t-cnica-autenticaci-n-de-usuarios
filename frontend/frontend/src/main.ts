import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { TokenInterceptor } from './app/services/token.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([TokenInterceptor])),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));










