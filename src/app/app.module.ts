import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CubosServices } from './services/cubos.services';
import { MenuComponent } from './components/menu/menu.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { CompraComponent } from './components/compra/compra.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CuboComponent,
    SeguridadComponent,
    UsuarioComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [CubosServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
