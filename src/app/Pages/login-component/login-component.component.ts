import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  formulario:FormGroup;


  titulo:string = "Ingreso";
  constructor(public fb:FormBuilder) { 
    this.formulario = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }
  Ingreso(){
    console.log(this.formulario.value);
  }

  ngOnInit(): void {
   
  }

}
