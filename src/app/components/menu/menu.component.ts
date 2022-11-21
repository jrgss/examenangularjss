import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubo';
import { CubosServices } from 'src/app/services/cubos.services';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public marcas!:Array<string>;
  constructor(private _service:CubosServices) { }

  ngOnInit(): void {
    this._service.getMarcas().subscribe(res=>{
      this.marcas=res;
    })
  }

}
