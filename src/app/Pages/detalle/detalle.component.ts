import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/servicio/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  pokemonData:any={};
  pokemonCharacteristics:any={};
  MorePokemon:any=[];

  constructor(
    private route:Router,
    private activeRoute: ActivatedRoute,
    private productoService:ProductosService
  ) { 
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.productoService.getAllData(id).subscribe({
      next:(data:any)=>{
        this.pokemonData = data
      }
    })
    this.productoService.getCharacteristics(id).subscribe({
      next:(data:any)=>{
        this.pokemonCharacteristics = data
      }
    })
    for(let i=1 ; i<=30 ; i++){
      this.productoService.getAllData([i]).subscribe({
        next:(data:any)=>{
          this.MorePokemon.push(data)
        }
      })
    }
  }
  

  ngOnInit(): void {
   
  }

  reloadPage(id:number){
    
    window.location.replace('/pokemon/'+id);
   
  }


}
