import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MenuComponent } from './menu/menu.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';

const routes: Routes = [
  {
    path: "",
    component: LoginPageComponent
  },
  {
    path: "homepage",
    component: HomepageComponent,
    children: [
    {
      path: "homepage/menu",
      component: MenuComponent
    },
    {
      path: "homepage/orders",
      component:ViewOrdersComponent
    },
    {
      path: "homepage/addOrder",
      component: AddOrderComponent
    },
    {
      path: "homepage/addItem",
      component: AddItemComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
