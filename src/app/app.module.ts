import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { FormNewItemComponent } from './form-new-item/form-new-item.component';
import { ListCitiesComponent } from './list-cities/list-cities.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactComponent } from './contact/contact.component';
//import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { Page404Component } from './page404/page404.component';
import { UserComponent } from './users/user/user.component';
import { DetailsComponent } from './users/details/details.component';
import { ListComponent } from './users/list/list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SpinnerInterceptor } from './shared/spinner/spinner.interceptor';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormNewItemComponent,
    ListCitiesComponent,
    FilterPipe,
    ContactComponent,
    //ContactReactiveComponent, --> lo sacamos igualmente por el lazy loading y ahora esta en el module de contact reactive
    HomeComponent,
    NavbarComponent,
    Page404Component,
    UserComponent,
    DetailsComponent,
    ListComponent,
    SpinnerComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
