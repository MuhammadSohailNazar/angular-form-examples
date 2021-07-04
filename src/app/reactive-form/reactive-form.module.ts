import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';



@NgModule({
  declarations: [
    CustomerSignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule
  ]
})
export class ReactiveFormModule { }
