import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomerSignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormRoutingModule
  ]
})
export class ReactiveFormModule { }
