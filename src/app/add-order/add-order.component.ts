import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Items, Orders } from '../model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  orderDetails: Orders = {
    Customer: "",
    Amount: 0
}
  itemsList?: Array<Items>
  qty: Array<number> = []
  price: Array<number> = []
  total: number = 0
  cust: string = ""

  constructor(private service: RestaurantService, private router: Router) {}

  ngOnInit(): void {
    this.itemsList?.forEach(element => {
      this.qty[element.id] = 0
    });

    this.service.getItems().subscribe((data)=> {
      this.itemsList = data
      console.log(data)
    })
  }

  submitOrder(){
    this.cust = (<HTMLInputElement>document.getElementById("name")).value;

    this.itemsList?.forEach(element => {
      if(this.qty[element.id]){
        this.price[element.id] = this.qty[element.id]*element.price;
        this.total += this.price[element.id]
      }
    });

    this.orderDetails.Customer = this.cust
    this.orderDetails.Amount = this.total

    this.service.postOrder(this.orderDetails).subscribe((data) => {
    })
    window.location.reload()
  }

}
