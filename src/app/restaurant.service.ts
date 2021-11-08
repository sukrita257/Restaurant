import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin, Items, Orders } from './model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  formData?: Items
  readonly rootURL="https://restaurant-service-1.azurewebsites.net/api"

  constructor(private http: HttpClient ) { }

  postItem(formData: Items){
    return this.http.post(this.rootURL+'/items', formData);
  }

  getItems(){
    return this.http.get<Array<Items>>(this.rootURL+'/items');
  }

  delItem(id: number){
    return this.http.delete(this.rootURL+`/items/${id}`);
  }

  postOrder(details?: Orders){
    return this.http.post(this.rootURL+'/orders', details);
  }

  getOrders(){
    return this.http.get<Array<Orders>>(this.rootURL+'/orders');
  }

  getAdmin(){
    return this.http.get<Array<Admin>>(this.rootURL+'/Admins');
  }

  postAdmin(admin: Admin){
    return this.http.post(this.rootURL+'/Admins', admin);
  }
}
