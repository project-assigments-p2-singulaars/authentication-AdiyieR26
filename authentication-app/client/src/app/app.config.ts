import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter} from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient} from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter( routes ), 
    importProvidersFrom(JwtModule.forRoot({}))
  ]
}
