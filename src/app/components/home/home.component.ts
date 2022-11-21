import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubo';
import { CubosServices } from 'src/app/services/cubos.services';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cubos!:Array<Cubo>;
  constructor(private _service:CubosServices,private _activatedRoute:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params:Params)=>{
      if(params['marca']==null){
        this._service.getCubos().subscribe(res=>{
          this.cubos=res;
        })
      }else{
        var marca=params['marca'];
        this._service.getCubosPorMarca(marca).subscribe(res=>{
          this.cubos=res;
        })
      }
    })
    
  }

}
