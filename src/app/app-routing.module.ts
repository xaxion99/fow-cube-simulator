import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardSearcherComponent } from './card-searcher/card-searcher.component';

const routes: Routes = [
  { path: 'card_details', component: CardDetailsComponent },
  { path: '', component: CardSearcherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
