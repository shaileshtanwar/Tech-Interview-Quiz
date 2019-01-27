import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from 'src/app/app.component';
import { TileComponent } from 'src/app/tile/tile.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ToolbarModule } from 'src/app/toolbar/toolbar.module';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
