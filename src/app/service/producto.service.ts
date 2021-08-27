import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

 private REST_API_SERVER = "http://localhost:8080/Producto";

  private data: object = {};
  data$ = new BehaviorSubject<any>(this.data);

  constructor(private httpClient: HttpClient) { }

  setData(data: object){
    this.data$.next(data);
  }

  getData(){
    return of(this.data);
  }

  public sendGetProducto(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

}
