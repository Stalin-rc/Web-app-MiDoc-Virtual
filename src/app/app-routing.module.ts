import { ValidarComponent } from './components/validar/validar.component';
import { OlvidarComponent } from './components/olvidar/olvidar.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home/:id", component: HomeComponent },
  { path: "home/:id", component: HomeComponent },
  { path: "busqueda/:id", component: BusquedaComponent },
  { path: "detalle/:id", component: DetalleComponent },
  { path: "detalle", component: DetalleComponent },
  { path: "home", component: HomeComponent },
  { path: "busqueda", component: BusquedaComponent },
  { path: "registrar", component: RegistroComponent },
  { path: 'olvidar', component: OlvidarComponent },
  { path: 'validar', component: ValidarComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
