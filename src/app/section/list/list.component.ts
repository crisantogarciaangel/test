import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { Producto } from '../../model/producto.model';
import { ProductoService } from '../../service/producto.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./style.css']
})
export class ListComponent implements OnInit {

  productos : Producto [] = [];

  displayedColumns: string[] = ['nombre', 'precio', 'catAlmacen', 'fechaCaducidad'];
  dataSource = [];
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
  this.productoService.sendGetProducto().subscribe((data: any[])=>{
      this.dataSource = data;
    })  

  }



}
