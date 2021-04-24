import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';

import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'topherweb.us.auth0.com',
      clientId: 'gnubjbuT8pYYvi0N0DYuQB0j6D1LUoh0'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
