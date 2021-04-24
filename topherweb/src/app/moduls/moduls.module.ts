import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[InicioComponent]
})
export class ModulsModule { }
