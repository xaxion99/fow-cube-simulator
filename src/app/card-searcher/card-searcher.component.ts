import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardFetcherService } from '../card-fetcher.service';

@Component({
  selector: 'app-card-searcher',
  templateUrl: './card-searcher.component.html',
  styleUrls: ['./card-searcher.component.scss']
})
export class CardSearcherComponent implements OnInit {
  // Relationship of Clusters to Sets as an object
  clusters = { Promos: ['PROMOS'],
               Grimm: ['CMF', 'TAT', 'MPR', 'MOA', 'VIN001'],
               Alice: ['VS01', 'SKL', 'TTW', 'TMS', 'BFA', 'VIN002'],
               Lapis: ['SDL', 'CFC', 'LEL', 'RDE', 'ENW', 'VIN003'],
               Reiya: ['SDR', 'ACN', 'ADK', 'SDR6', 'TSW', 'WOM'],
               'New Valhalla': ['SDV', 'NDR', 'SNV', 'AOA', 'DBV'],
               'Alice Origins': ['AO1', 'SDAO1', 'AO2', 'SDAO2', 'AO3', 'GITS2045SD', 'GITS2045', 'POFA'],
               Saga: ['EDL', 'MSW'],
             };
  cards: any = [];
  searchArray: any = [];
  cluster = '';
  set = '';
  cardIndex = 0;
  setIndex = 0;
  searchIndexArray = [];
  details = false;

  constructor(public cfs: CardFetcherService, private router: Router) { }

  ngOnInit(): void {
    this.cards = this.cfs.getCards();
  }

  // Retrieve and display cards of a given name
  searchCard() {
    this.searchArray = [];
    this.searchIndexArray = [];
    const vStr = document.getElementById('search') as unknown as HTMLInputElement;
    const v = String(vStr.value);
    for (let i = 0; i < this.cards.length; i++) { // const set of this.cards
      for (let j = 0; j < this.cards[i].card.length; j++) { // const card of set.card
        if (v === String(this.cards[i].card[j].name)) {
          this.searchIndexArray.push({s: i, c: j});
          this.searchArray.push(this.cards[i].card[j]);
        }
      }
    }
  }

  // Choose a set based on the cluster and then display all cards in the set
  getSet(sIndex) {
    this.searchArray = [];
    this.searchIndexArray = [];
    for (let i = 0; i < this.cards[sIndex].card.length; i++) { // const card of this.cards[sIndex].card
      this.searchIndexArray.push({s: sIndex, c: i});
      this.searchArray.push(this.cards[sIndex].card[i]);
    }
  }

  clusterSelected(event: any) {
    console.log(event.target.value);
    this.set = '';
  }

  setSelected(event: any) {
    console.log(event.target.value);
    this.cardIndex = 0;
    if (event.target.value === 'PROMOS') {
      this.setIndex = 0;
    } else if (event.target.value === 'CMF') { // Grimm Cluster
      this.setIndex = 1;
    } else if (event.target.value === 'TAT') {
      this.setIndex = 2;
    } else if (event.target.value === 'MPR') {
      this.setIndex = 3;
    } else if (event.target.value === 'MOA') {
      this.setIndex = 4;
    } else if (event.target.value === 'VIN001') {
      this.setIndex = 5;
    } else if (event.target.value === 'VS01') { // Alice Cluster
      this.setIndex = 6;
    } else if (event.target.value === 'SKL') {
      this.setIndex = 7;
    } else if (event.target.value === 'TTW') {
      this.setIndex = 8;
    } else if (event.target.value === 'TMS') {
      this.setIndex = 9;
    } else if (event.target.value === 'BFA') {
      this.setIndex = 10;
    } else if (event.target.value === 'VIN002') {
      this.setIndex = 11;
    } else if (event.target.value === 'SDL') { // Lapis CLuster
      this.setIndex = 12;
    } else if (event.target.value === 'CFC') {
      this.setIndex = 13;
    } else if (event.target.value === 'LEL') {
      this.setIndex = 14;
    } else if (event.target.value === 'RDE') {
      this.setIndex = 15;
    } else if (event.target.value === 'ENW') {
      this.setIndex = 16;
    } else if (event.target.value === 'VIN003') {
      this.setIndex = 17;
    } else if (event.target.value === 'SDR') { // Reiya CLuster
      this.setIndex = 18;
    } else if (event.target.value === 'ACN') {
      this.setIndex = 19;
    } else if (event.target.value === 'ADK') {
      this.setIndex = 20;
    } else if (event.target.value === 'SDR6') {
      this.setIndex = 21;
    } else if (event.target.value === 'TSW') {
      this.setIndex = 22;
    } else if (event.target.value === 'WOM') {
      this.setIndex = 23;
    } else if (event.target.value === 'SDV') { // New Valhalla CLuster
      this.setIndex = 24;
    } else if (event.target.value === 'NDR') {
      this.setIndex = 25;
    } else if (event.target.value === 'SNV') {
      this.setIndex = 26;
    } else if (event.target.value === 'AOA') {
      this.setIndex = 27;
    } else if (event.target.value === 'DBV') {
      this.setIndex = 28;
    } else if (event.target.value === 'AO1') { // Alice Origins CLuster
      this.setIndex = 29;
    } else if (event.target.value === 'SDAO1') {
      this.setIndex = 30;
    } else if (event.target.value === 'AO2') {
      this.setIndex = 31;
    } else if (event.target.value === 'SDAO2') {
      this.setIndex = 32;
    } else if (event.target.value === 'AO3') {
      this.setIndex = 33;
    } else if (event.target.value === 'GITS2045SD') {
      this.setIndex = 34;
    } else if (event.target.value === 'GITS2045') {
      this.setIndex = 35;
    } else if (event.target.value === 'POFA') {
      this.setIndex = 36;
    } else if (event.target.value === 'EDL') { // Saga CLuster
      this.setIndex = 37;
    } else if (event.target.value === 'MSW') {
      this.setIndex = 38;
    }

    this.getSet(this.setIndex);
  }

  // Display a cards individual details
  getDetailsFromSearch(card: any, i) {
    this.setIndex = this.searchIndexArray[i].s;
    this.cardIndex = this.searchIndexArray[i].c;
    console.log('Set:', this.setIndex, 'Card:', this.cardIndex);
    this.cfs.setCard(card);
    this.details = true;
  }

  // Display a cards individual details
  getDetails(card: any, i) {
    this.cardIndex = i;
    this.cfs.setCard(card);
    this.details = true;
  }

  // Initialize a card for moving between cards details in a given set
  initializeCard() {
    console.log(this.cards[this.setIndex].card[this.cardIndex]);
    this.getDetails(this.cards[this.setIndex].card[this.cardIndex], this.cardIndex);
  }

   // Move to the next card in the array
  nextCard() {
    if (this.cardIndex < this.cards[this.setIndex].card.length - 1) {
      this.cardIndex += 1;
      this.initializeCard();
      setTimeout(() => { }, 750); // Delay load of button click still buggy
    } else {
      console.log('This is the last card in the set.');
    }
  }

  // Move to the previous card in the array
  prevCard() {
    if (this.cardIndex !== 0) {
      this.cardIndex -= 1;
      this.initializeCard();
      setTimeout(() => { }, 750); // Delay load of button click still buggy
    } else {
      console.log('This is the first card in the set.');
    }
  }

  // Jump to a card within a given set based on ID
  jumpCard() {
    const vStr = document.getElementById('jump') as unknown as HTMLInputElement;
    let v = Number(vStr.value);
    // This if is just for normalizing the number scale to be from 1 to the end instead of 0 to the end
    if (v > 0) {
      v -= 1;
      if (v < this.cards[this.setIndex].card.length && v >= 0) {
        this.cardIndex = v;
        this.initializeCard();
        setTimeout(() => { }, 1500); // Delay load of button click still buggy
      } else {
        console.log('That value is outside of the current set.');
      }
    } else {
      console.log('That value is outside of the current set.');
    }
  }

  goBack() {
    this.details = false;
  }

}
