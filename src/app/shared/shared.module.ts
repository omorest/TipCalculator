import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    ButtonComponent
  ]
})
export class SharedModule { }
