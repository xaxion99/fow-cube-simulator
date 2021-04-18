import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardDetailsComponent } from './card-details/card-details.component';
import { CardFetcherComponent } from './card-fetcher/card-fetcher.component';

@NgModule({
  declarations: [
    AppComponent,
    CardDetailsComponent,
    CardFetcherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
