import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CardFetcherService } from '../card-fetcher.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit, OnChanges {
  @Input() card;

  allSets;
  artist;
  attDef;
  cost;
  expansion;
  flavorText;
  image;
  name;
  number;
  race;
  rarity;
  text;
  type;
  url;

  constructor(private cfs: CardFetcherService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.initializeCard();
  }

  ngOnInit(): void {
    if (this.card === undefined) {
      this.card = this.cfs.getCard();
    }
    this.initializeCard();
  }

  initializeCard() {
    // Initialize Card Details
    this.allSets = this.card.all_sets;
    this.artist = this.card.artist;
    this.attDef = this.card.att_def;
    this.cost = this.card.cost;
    this.expansion = this.card.expansion;
    this.flavorText = this.card.flavor_text;
    this.image = this.card.image;
    this.name = this.card.name;
    this.number = this.card.number;
    this.race = this.card.race;
    this.rarity = this.card.rarity;
    this.text = this.card.text;
    this.type = this.card.type;
    this.url = this.card.url;
  }

}
