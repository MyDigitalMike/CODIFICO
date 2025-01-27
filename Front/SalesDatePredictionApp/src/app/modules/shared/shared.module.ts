import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DynamicTableComponentComponent } from './dynamic-table-component/dynamic-table-component.component';
@NgModule({
  declarations: [DynamicTableComponentComponent],
  imports: [CommonModule,FormsModule],
  exports: [DynamicTableComponentComponent]
})
export class SharedModule { }
