import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsCalculatorComponent } from './tips-calculator/tips-calculator.component';
import { SharedModule } from '../shared/shared.module';
import { TipsCardResultComponent } from './tips-card-result/tips-card-result.component';
import { TipsFormComponent } from './tips-form/tips-form.component';
import { TipsService } from './services/tips.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TipsCalculatorComponent,
    TipsCardResultComponent,
    TipsFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    TipsCalculatorComponent
  ],
  providers: [
  ]
})
export class TipsModule { }
