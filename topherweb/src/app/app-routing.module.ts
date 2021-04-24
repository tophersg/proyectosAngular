import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { InicioComponent } from './moduls/inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'quienSoy', component: InicioComponent },
  { path: 'portafolio', component: InicioComponent },
  { path: 'contacto', component: InicioComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Pagina de inicio
  { path: '**', component: PageNotFoundComponent } // Pagina no encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
