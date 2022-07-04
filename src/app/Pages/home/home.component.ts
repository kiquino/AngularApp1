import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicio/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Pokemons:any=[
 
  ]
  PokemonsData:any=[]


  constructor(
    private productoService:ProductosService
  ) { 
    // this.productoService.getAll()
    // .subscribe({next:(data:any)=>{
    //   this.Pokemons = data["results"]
    // },error:error=>{
    //   console.log(error)
    // }})
    for (let index = 1; index < 100; index++) {
      this.productoService.getAllData([index])
      .subscribe({next:(data:any)=>{
        this.PokemonsData.push(data)
      }})
      
    }
  
   
    //service devuelve un observable que se atrapa con subscribe, subscribe recibe dos parametros, success y error
    // this.productoService.getAllPromises()
    // .then(data=>{
    //   console.log("data",data)
    // })

    this.init()
  }

  async init(){
    // try {
    //   const resultado = await this.productoService.getAllPromises()
    //   this.productosAsync = resultado;
      
    // } catch (error) {
    //   console.log(error)
    // }
  }

  ngOnInit(): void {

  }

}
