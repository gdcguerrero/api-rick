import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule
  ],
  exports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule
  ]
})
export class MaterialModule { }
