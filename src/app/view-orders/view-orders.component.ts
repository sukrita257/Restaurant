import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from '../model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  ordersList?: Array<Orders>
  // currRating = 0;

  constructor(private service:RestaurantService, private router: Router) { }

  ngOnInit(): void {
    this.service.getOrders().subscribe((data)=> {
      this.ordersList = data
    })
  }
}
