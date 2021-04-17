import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  cards: any = [];
  index = 0;
  jumpVar = 0;

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

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('assets/Grimm/cmf.json').subscribe(data => {
      console.log(data);
      this.cards = data;
      console.log(this.cards);
      this.initializeCards();
    });
  }

  initializeCards() {
    // Initialize Card Details
    this.allSets = this.cards.card[this.index].all_sets;
    this.artist = this.cards.card[this.index].artist;
    this.attDef = this.cards.card[this.index].att_def;
    // this.cost = [{attribute: 'http://d12h0em1d7ppg.cloudfront.net/docs/icons/white.png'},
    // {attribute: 'http://d12h0em1d7ppg.cloudfront.net/docs/icons/cost/01.png'}];
    this.expansion = this.cards.card[this.index].expansion;
    this.flavorText = this.cards.card[this.index].flavor_text;
    this.image = this.cards.card[this.index].image;
    this.name = this.cards.card[this.index].name;
    this.number = this.cards.card[this.index].number;
    this.race = this.cards.card[this.index].race;
    this.rarity = this.cards.card[this.index].rarity;
    this.text = this.cards.card[this.index].text;
    this.type = this.cards.card[this.index].type;
    this.url = this.cards.card[this.index].url;
  }

  // Move to the next card in the array
  nextCard() {
    if (this.index < this.cards.card.length - 1) {
      this.index += 1;
      console.log(this.index);
      this.allSets = this.cards.card[this.index].all_sets;
      this.artist = this.cards.card[this.index].artist;
      this.attDef = this.cards.card[this.index].att_def;
      // this.cost = [{attribute: 'http://d12h0em1d7ppg.cloudfront.net/docs/icons/white.png'},
      // {attribute: 'http://d12h0em1d7ppg.cloudfront.net/docs/icons/cost/01.png'}];
      this.expansion = this.cards.card[this.index].expansion;
      this.flavorText = this.cards.card[this.index].flavor_text;
      this.image = this.cards.card[this.index].image;
      this.name = this.cards.card[this.index].name;
      this.number = this.cards.card[this.index].number;
      this.race = this.cards.card[this.index].race;
      this.rarity = this.cards.card[this.index].rarity;
      this.text = this.cards.card[this.index].text;
      this.type = this.cards.card[this.index].type;
      this.url = this.cards.card[this.index].url;
    } else {
      console.log('This is the last card in the set.');
    }
  }

  // Move to the previous card in the array
  prevCard() {
    if (this.index !== 0) {
      this.index -= 1;
      console.log(this.index);
      this.allSets = this.cards.card[this.index].all_sets;
      this.artist = this.cards.card[this.index].artist;
      this.attDef = this.cards.card[this.index].att_def;
      // this.cost = [{attribute: 'http://d12h0em1d7ppg.cloudfront.net/docs/icons/white.png'},
      // {attribute: 'http://d12h0em1d7ppg.cloudfront.net/docs/icons/cost/01.png'}];
      this.expansion = this.cards.card[this.index].expansion;
      this.flavorText = this.cards.card[this.index].flavor_text;
      this.image = this.cards.card[this.index].image;
      this.name = this.cards.card[this.index].name;
      this.number = this.cards.card[this.index].number;
      this.race = this.cards.card[this.index].race;
      this.rarity = this.cards.card[this.index].rarity;
      this.text = this.cards.card[this.index].text;
      this.type = this.cards.card[this.index].type;
      this.url = this.cards.card[this.index].url;
    } else {
      console.log('This is the first card in the set.');
    }
  }

  jumpCard() {
    const vStr = document.getElementById('jump') as unknown as HTMLInputElement ;
    const v = Number(vStr.value);
    if (v < this.cards.card.length && v >= 0) {
      this.index = v;
      console.log(this.index);
      this.allSets = this.cards.card[this.index].all_sets;
      this.artist = this.cards.card[this.index].artist;
      this.attDef = this.cards.card[this.index].att_def;
      // this.cost = [{attribute: 'http://d12h0em1d7ppg.cloudfront.net/docs/icons/white.png'},
      // {attribute: 'http://d12h0em1d7ppg.cloudfront.net/docs/icons/cost/01.png'}];
      this.expansion = this.cards.card[this.index].expansion;
      this.flavorText = this.cards.card[this.index].flavor_text;
      this.image = this.cards.card[this.index].image;
      this.name = this.cards.card[this.index].name;
      this.number = this.cards.card[this.index].number;
      this.race = this.cards.card[this.index].race;
      this.rarity = this.cards.card[this.index].rarity;
      this.text = this.cards.card[this.index].text;
      this.type = this.cards.card[this.index].type;
      this.url = this.cards.card[this.index].url;
    } else {
      console.log('That value is outside of the current set.');
    }
  }

}
