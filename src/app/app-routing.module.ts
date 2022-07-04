import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './Pages/detalle/detalle.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponentComponent } from './Pages/login-component/login-component.component';
import { RegistroComponent } from './Pages/registro/registro.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponentComponent},
  {path:"registro",component:RegistroComponent},
  {
    path:"pokemon/:id",component:DetalleComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
