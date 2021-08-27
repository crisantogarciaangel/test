import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Producto } from '../../model/producto.model';
import { ProductoService } from '../../service/producto.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./style.css']
})
export class FormComponent implements OnInit {

  productos : Producto [] = [];
  form: FormGroup;
  
  constructor(private fb: FormBuilder, private productoService: ProductoService) {
    this.form = this.fb.group({
       nombre: ['', Validators.required ],
       precio: ['', Validators.required ],
       catAlmacen : ['', Validators.required],
       fechaCaducidad : []
    });

  }

  ngOnInit(): void {
  //his.productoService?.data$?.subscribe(a => this.productos = Object.entries(a).length > 0 ? a : []).unsubscribe();
  }

  save(): void {
    
  }



}
