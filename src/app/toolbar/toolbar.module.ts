import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSlideToggleModule,
    RouterModule,
    MaterialModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
