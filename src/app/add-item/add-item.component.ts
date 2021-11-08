import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Items } from '../model';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  itemForm:FormGroup
  itemsList?: Array<Items>

  constructor(private service: RestaurantService, private router: Router) { 
    this.itemForm = new FormGroup({
      'item_name' : new FormControl('', Validators.required),
      'price' : new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.loadMenu()
  }
  
  loadMenu(){
    this.service.getItems().subscribe((data)=> {
      this.itemsList = data
    })
  }

  clear(){
    this.itemForm.reset()
  }

  submitItem(){
    Object.keys(this.itemForm.controls).forEach(field => {
      const control = this.itemForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    this.service.postItem(this.itemForm.value).subscribe(res=>{
      console.log(this.itemForm.value)
    })
    this.loadMenu()
    this.clear()
  }
}
