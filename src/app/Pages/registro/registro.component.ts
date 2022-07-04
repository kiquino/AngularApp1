import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formularioRegistro:FormGroup
  titulo:string = "Registro"
  constructor(
    public fb:FormBuilder
  ) { 
    this.formularioRegistro = this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(3)]],
      apellido:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      contraseña:['',[Validators.required,Validators.minLength(6)]],
    })

    
  }

  Registro(){
    console.log(this.formularioRegistro.value);
  }

  ngOnInit(): void {
  }

}
