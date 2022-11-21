import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubo';
import { CubosServices } from 'src/app/services/cubos.services';
import { ActivatedRoute,Params } from '@angular/router';
import { Comentario } from 'src/app/models/comentario';
@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.css']
})
export class CuboComponent implements OnInit {
public cubo!:Cubo;
public id!:string;
public comentarios!:Array<Comentario>;
  constructor(private _service:CubosServices,private _activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params:Params)=>{
      this.id=params['id'];
        this._service.getCubo(this.id).subscribe(res=>{
          this.cubo=res;
        })
        this._service.getComentariosCubo(this.id).subscribe(res=>{
          this.comentarios=res;
        })
    })
  }

}
