import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { CubosServices } from 'src/app/services/cubos.services';
import { Router } from '@angular/router';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css']
})
export class SeguridadComponent implements OnInit {
public opcion!:number;
public statusIniciado!:boolean;
public token!:any
@ViewChild("cajauserl")cajaUserL!:ElementRef;
@ViewChild("cajapassl")cajaPassL!:ElementRef;
@ViewChild("cajauserr")cajaUserR!:ElementRef;
@ViewChild("cajaemailr")cajaEmailR!:ElementRef;
@ViewChild("cajapassr")cajaPassR!:ElementRef;
@ViewChild("cajapassreper")cajaPassRepeR!:ElementRef;

  constructor(private _service:CubosServices,private _activatedRoute:ActivatedRoute,private _router:Router) { 
  }

  ngOnInit(): void {
    
    this._activatedRoute.params.subscribe((params:Params)=>{
      this.opcion=params['opcion'];
    })

    
      this.token=this._service.getToken()
      if(this.token==null){
        this.statusIniciado=false;
        console.log("token=null")
      }else{
        this.statusIniciado=true;
        console.log("hay token")
        // console.log(this.token)
      }
    
  }
  inicioSesion():void{
    var user=this.cajaUserL.nativeElement.value;
    var pass= this.cajaPassL.nativeElement.value;
    this._service.inicioSesion(user,pass).subscribe(res=>{
      var token=res;
      this._service.guardarToken(token.response);
      this.statusIniciado=true;

    })
  }

  registro():void{
    var name=this.cajaUserR.nativeElement.value;
    var mail=this.cajaEmailR.nativeElement.value;
    var pass=this.cajaPassR.nativeElement.value;
    var json={
      idUsuario:531,nombre:name,email:mail,pass:pass
    }

    this._service.registroUser(json).subscribe(res=>{
      this.opcion=1;
    })

  }
}
