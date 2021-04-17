import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardFetcherComponent } from './card-fetcher/card-fetcher.component';
import { ImageDownloaderComponent } from './image-downloader/image-downloader.component';

@NgModule({
  declarations: [
    AppComponent,
    CardFetcherComponent,
    ImageDownloaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
