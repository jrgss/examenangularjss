import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubo';
import { CubosServices } from 'src/app/services/cubos.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  public cubos!:Array<Cubo>;
  constructor(private _service:CubosServices, private _router:Router
    ) { }
    

  ngOnInit(): void {
    this._service.getCubos().subscribe(res=>{
      this.cubos=res;
    })
  }

  compro(id:number):void{
    this._service.comprarCubo(id).subscribe(res=>{
      this._router.navigate(["usuario","2"])

    })
  }

}
