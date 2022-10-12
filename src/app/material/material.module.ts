import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule
  ]
})
export class MaterialModule { }
