import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from 'src/app/app.component';
import { TileComponent } from 'src/app/tile/tile.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ToolbarModule } from 'src/app/toolbar/toolbar.module';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialModule } from 'src/app/material.module';
import { HomeComponent } from 'src/app/home/home.component';
import { TileService } from 'src/app/tile/tile.service';
import { QuizComponent } from './quiz/quiz.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    HomeComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    CoreModule,
    MaterialModule,
    ReactiveFormsModule

  ],
  providers: [TileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
