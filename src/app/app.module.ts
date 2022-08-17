import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaisesModule } from './paises/paises.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from 'src/app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    BrowserModule,
    SharedModule,
    PaisesModule,
    AppRoutingModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
