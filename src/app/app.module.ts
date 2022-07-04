import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';

import {HttpClientModule} from '@angular/common/http';
import { CapitalizarPipe } from './capitalizar.pipe';
import { LoginComponentComponent } from './Pages/login-component/login-component.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { MenuComponent } from './Components/menu/menu.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
   
    CapitalizarPipe,
        LoginComponentComponent,
        RegistroComponent,
        DetalleComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //se necesita para poner el ngmodel en el input
    ReactiveFormsModule,
    HttpClientModule // me permite consumir protocolo http para obtener api
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
