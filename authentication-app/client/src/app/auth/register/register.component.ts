import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent  implements OnInit{
  private formBuilder = inject(FormBuilder);
  router = inject(Router);
  registerForm!:FormGroup;

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      userName:["", Validators.required],
      email:["", [Validators.required, Validators.email]],
      password:["", [Validators.required]],
    });
  }

  onSubmit(): void {

  }

}
