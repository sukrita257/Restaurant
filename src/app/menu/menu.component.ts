import { Component, OnInit } from '@angular/core';
import { Items } from '../model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  itemsList?: Array<Items>

  constructor(private service:RestaurantService) { }

  ngOnInit(): void {
    this.service.getItems().subscribe((data)=> {
      this.itemsList = data
      console.log(data)
    })
  }

  deleteData(id:number){
    this.service.delItem(id).subscribe((data) => {
      window.location.reload()
    })
  }
}
