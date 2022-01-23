import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartComponent } from './cart/cart.component';
import { AddressPageComponent} from './address-page/address-page.component';
import { OrdersummaryPageComponent} from './ordersummary-page/ordersummary-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
 




const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"product-page", component:ProductPageComponent},
  {path:"cart", component:CartComponent},
  {path:"address", component:AddressPageComponent},
  {path:"ordersummary", component:OrdersummaryPageComponent},
  {path:'login', component:LoginPageComponent},
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],




  exports: [RouterModule]
})
export class AppRoutingModule { }
