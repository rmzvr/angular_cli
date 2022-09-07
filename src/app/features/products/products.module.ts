import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './products.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { InputModule } from 'src/app/shared/components/input/input.module';

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [CommonModule, ButtonModule, InputModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}
