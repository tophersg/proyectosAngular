import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Modulos 
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'precio', component: PreciosComponent },
  { path: 'protegida', component: ProtegidaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
