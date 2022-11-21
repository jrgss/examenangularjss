import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent } from './components/compra/compra.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { HomeComponent } from './components/home/home.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"compra",component:CompraComponent
  },  
  {
    path:":marca",component:HomeComponent
  },
  {
    path:"cubo/:id",component:CuboComponent
  },
  {
    path:"seguridad/:opcion",component:SeguridadComponent
  },
  {
    path:"usuario/:opcion",component:UsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
