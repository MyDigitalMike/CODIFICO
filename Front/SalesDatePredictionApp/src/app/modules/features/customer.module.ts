import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './costumer-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomerModule {}
