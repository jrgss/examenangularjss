import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Cubo } from "../models/cubo";
@Injectable()

export class CubosServices{
    constructor(private _http:HttpClient){}

    getCubos():Observable<any>{
        var request="/api/Cubos";
        var url=environment.urlCubos+request;
        return this._http.get(url);
    }

    getMarcas():Observable<any>{
        var request="/api/Cubos/Marcas";
        var url=environment.urlCubos+request;
        return this._http.get(url);
    }

    getCubosPorMarca(marca:string):Observable<any>{
        var request="/api/Cubos/CubosMarca/"+marca;
        var url=environment.urlCubos+request;
        return this._http.get(url);
    }

    getCubo(id:string):Observable<any>{
        var request="/api/Cubos/"+id;
        var url=environment.urlCubos+request;
        return this._http.get(url);
    }

    getComentariosCubo(id:string):Observable<any>{
        var request="/api/ComentariosCubo/GetComentariosCubo/"+id;
        var url=environment.urlCubos+request;
        return this._http.get(url);
    }

    inicioSesion(mail:string,pass:string):Observable<any>{
        var request="/api/Manage/Login";
        var url=environment.urlCubos+request;
        var json={email:mail,password:pass};
        
        // console.log(json)
        var header= new HttpHeaders().set("Content-type","application/json")
        // console.log(header);
        return this._http.post(url,json,{headers:header});
    }

    guardarToken(token:string):void{
        localStorage.setItem('token',token);
    }
    getToken():any{
        return localStorage.getItem('token');
    }

    getPerfilUsuario():Observable<any>{
        var request="/api/Manage/PerfilUsuario";
        var url=environment.urlCubos+request;
        var token=localStorage.getItem('token')
        // console.log('token='+token)

        var header=new HttpHeaders().set("Content-type","application/json").set('Authorization','bearer '+token);

        return this._http.get(url,{headers:header})
    }

    getCompras():Observable<any>{
        var request="/api/Compra/ComprasUsuario";
        var url=environment.urlCubos+request;
        var token=localStorage.getItem('token');
        // console.log('token='+token)
        var header=new HttpHeaders().set("Content-type","application/json").set('Authorization','bearer '+token);

        return this._http.get(url,{headers:header})
    }

    comprarCubo(id:number):Observable<any>{
        var miId=id.toString();
        var request="/api/Compra/InsertarPedido/"+id;
        var url=environment.urlCubos+request;
        var token=localStorage.getItem('token');
        var header=new HttpHeaders().set('Authorization','bearer '+token);
        return this._http.post(url,"",{headers:header});
        
    }


    registroUser(user:any):Observable<any>{
        var request="/api/Manage/RegistroUsuario";
        var url=environment.urlCubos+request;
        var json=JSON.stringify(user);
        var header= new HttpHeaders().set("Content-type","application/json")
        return this._http.post(url,json,{headers:header})
    }
}