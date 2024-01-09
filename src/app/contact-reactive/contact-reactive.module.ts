//ng generate module contact-reactive --routing true
// Hacer este routing aparte de la app es para que esta seccion se separe de la app principal y haga LAZY LOADING
// Y eso consiste en que solo cargar esta parte cuando se requiera, si hace un build de todo sin esta separacion la precargará incesariamente. 
// dado que puede ser que no se use por ejemplo. Separando se mejora la eficiencia.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactReactiveRoutingModule } from './contact-reactive-routing.module';
import { ContactReactiveComponent } from './contact-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactReactiveComponent,
  ],
  imports: [
    CommonModule,
    ContactReactiveRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ContactReactiveModule { }
