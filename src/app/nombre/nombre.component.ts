import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {
  nombre = 'Ingrese un nombre';
  constructor() { }
   modificado:any= false;
  cambiarTitle(){
    this.nombre="angular prueba dos!!"
    this.modificado=true;
  }

  ngOnInit(): void {
  }

}
