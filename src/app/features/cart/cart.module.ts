import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { InputModule } from 'src/app/shared/components/input/input.module';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, InputModule],
  exports: [CartComponent],
})
export class CartModule {}
