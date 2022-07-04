import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http: HttpClient
  ) { }
  getNames(){
    return this.http.get("https://pokeapi.co/api/v2/pokemon/")
  }
  getAllData(Id:any){
    return this.http.get("https://pokeapi.co/api/v2/pokemon/"+Id)
  }
  getCharacteristics(Id:any){
    return this.http.get("https://pokeapi.co/api/v2/characteristic/"+Id)
  }

  
}
