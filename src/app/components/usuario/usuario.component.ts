import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { CubosServices } from 'src/app/services/cubos.services';
import { ActivatedRoute,Params } from '@angular/router';
import { Router } from '@angular/router';
import { Compra } from 'src/app/models/compra';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public opcion!:number;
  public user!:Usuario;
  public compras!:Array<Compra>
  constructor(private _service:CubosServices,private _activatedRoute:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params:Params)=>{
      this.opcion=params['opcion'];
    })

    if(this.opcion==1){
      this.getUser();
    }else{
      this.getCompras();
    }
  }

  getUser():void{
    this._service.getPerfilUsuario().subscribe(res=>{
      this.user=res;
    })
  }

  getCompras():void{
    this._service.getCompras().subscribe(res=>{
      this.compras=res;
    })
  }

}
