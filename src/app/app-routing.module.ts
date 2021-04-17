import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardFetcherComponent } from './card-fetcher/card-fetcher.component';
import { ImageDownloaderComponent } from './image-downloader/image-downloader.component';


const routes: Routes = [
  { path: 'card-fetcher', component: CardFetcherComponent},
  { path: 'image-downloader', component: ImageDownloaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
