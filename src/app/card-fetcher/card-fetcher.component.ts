import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Grimm Cluster Imports
import cmf from 'src/assets/Grimm/cmf.json';
import tat from 'src/assets/Grimm/tat.json';
import mpr from 'src/assets/Grimm/mpr.json';
import moa from 'src/assets/Grimm/moa.json';
import vin001 from 'src/assets/Grimm/vin001.json';

// Alice Cluster Imports
import vs01 from 'src/assets/Alice/vs01.json';
import skl from 'src/assets/Alice/skl.json';
import ttw from 'src/assets/Alice/ttw.json';
import tms from 'src/assets/Alice/tms.json';
import bfa from 'src/assets/Alice/bfa.json';
import vin002 from 'src/assets/Alice/vin002.json';

// Lapis Cluster Imports
import sdl from 'src/assets/Lapis/sdl.json';
import cfc from 'src/assets/Lapis/cfc.json';
import lel from 'src/assets/Lapis/lel.json';
import rde from 'src/assets/Lapis/rde.json';
import enw from 'src/assets/Lapis/enw.json';
import vin003 from 'src/assets/Lapis/vin003.json';

// Reiya Cluster Imports
import sdr from 'src/assets/Reiya/sdr.json';
import acn from 'src/assets/Reiya/acn.json';
import adk from 'src/assets/Reiya/adk.json';
import sdr6 from 'src/assets/Reiya/sdr6.json';
import tsw from 'src/assets/Reiya/tsw.json';
import wom from 'src/assets/Reiya/wom.json';

// New Valhalla Cluster Imports
import sdv from 'src/assets/New Valhalla/sdv.json';
import ndr from 'src/assets/New Valhalla/ndr.json';
import snv from 'src/assets/New Valhalla/snv.json';
import aoa from 'src/assets/New Valhalla/aoa.json';
import dbv from 'src/assets/New Valhalla/dbv.json';

// Alice Origins Cluster Imports
import ao1 from 'src/assets/Alice Origins/ao1.json';
import sdao1 from 'src/assets/Alice Origins/sdao1.json';
import ao2 from 'src/assets/Alice Origins/ao2.json';
import sdao2 from 'src/assets/Alice Origins/sdao2.json';
import ao3 from 'src/assets/Alice Origins/ao3.json';
import gits2045sd from 'src/assets/Alice Origins/gits2045sd.json';
import gits2045 from 'src/assets/Alice Origins/gits2045.json';
import pofa from 'src/assets/Alice Origins/pofa.json';

@Component({
  selector: 'app-card-fetcher',
  templateUrl: './card-fetcher.component.html',
  styleUrls: ['./card-fetcher.component.scss']
})
export class CardFetcherComponent implements OnInit {

  // Relationship of Clusters to Sets as an object
  clusters = { Grimm: ['CMF', 'TAT', 'MPR', 'MOA', 'VIN001'],
               Alice: ['VS01', 'SKL', 'TTW', 'TMS', 'BFA', 'VIN002'],
               Lapis: ['SDL', 'CFC', 'LEL', 'RDE', 'ENW', 'VIN003'],
               Reiya: ['SDR', 'ACN', 'ADK', 'SDR6', 'TSW', 'WOM'],
               'New Valhalla': ['SDV', 'NDR', 'SNV', 'AOA', 'DBV'],
               'Alice Origins': ['AO1', 'SDAO1', 'AO2', 'SDAO2', 'AO3', 'GITS2045SD', 'GITS2045', 'POFA'],
             };

  cluster = '';
  set = '';

    // List of clusters for easier lookup of specific .json files
  // clusters = ['Grimm',
  //             'ALice',
  //             'Lapis',
  //             'Reiya',
  //             'New Valhalla',
  //             'Alice Origins',
  //             'Saga'
  //            ];

  // List of sets per cluster
  // grimmSets = ['cmf.json',
  //              'tat.json',
  //              'mpr.json',
  //              'moa.json',
  //              'vin001.json'
  //             ];

  // aliceSets = ['vs01.json',
  //              'skl.json',
  //              'ttw.json',
  //              'tms.json',
  //              'bfa.json',
  //              'vin002.json'
  //             ];


  cards: any = [];
  card: any;
  cardIndex = 0;
  setIndex = 0;
  jumpVar = 0;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.cards.push(cmf); // Grimm Cluster
    this.cards.push(tat);
    this.cards.push(mpr);
    this.cards.push(moa);
    this.cards.push(vin001);
    this.cards.push(vs01); // Alice Cluster
    this.cards.push(skl);
    this.cards.push(ttw);
    this.cards.push(tms);
    this.cards.push(bfa);
    this.cards.push(vin002);
    this.cards.push(sdl); // Lapis Cluster
    this.cards.push(cfc);
    this.cards.push(lel);
    this.cards.push(rde);
    this.cards.push(enw);
    this.cards.push(vin003);
    this.cards.push(sdr); // Reiya Cluster
    this.cards.push(acn);
    this.cards.push(adk);
    this.cards.push(sdr6);
    this.cards.push(tsw);
    this.cards.push(wom);
    this.cards.push(sdv); // New Valhalla Cluster
    this.cards.push(ndr);
    this.cards.push(snv);
    this.cards.push(aoa);
    this.cards.push(dbv);
    this.cards.push(ao1); // Alice Origins Cluster
    this.cards.push(sdao1);
    this.cards.push(ao2);
    this.cards.push(sdao2);
    this.cards.push(ao3);
    this.cards.push(gits2045sd);
    this.cards.push(gits2045);
    this.cards.push(pofa);

    console.log(this.cards);

    // for (let c = 0; c < this.clusters.length; c++) {
    //   if (c === 0) {
    //     for (let s = 0; s < this.grimmSets.length; s++) {
    //       this.httpClient.get('assets/' + this.clusters[c] + '/' + this.grimmSets[s]).subscribe(data => {
    //         this.set = data;
    //         this.cards.push(this.set);
    //       });
    //     }
    //   }
    //   // } else if (c === 1) {
    //   //   for (let s = 0; s < this.aliceSets.length; s++) {
    //   //     this.httpClient.get('assets/' + this.clusters[c] + '/' + this.aliceSets[s]).subscribe(data => {
    //   //       this.set = data;
    //   //       this.cards.push(this.set);
    //   //     });
    //   //   }
    //   // }
    // }

    this.initializeCard();
  }

  initializeCard() {
    this.card = this.cards[this.setIndex].card[this.cardIndex];
  }

  clusterSelected(event: any) {
    console.log(event.target.value);
    this.set = '';
  }

  setSelected(event: any) {
    console.log(event.target.value);
    this.cardIndex = 0;

    if (event.target.value === 'CMF') { // Grimm Cluster
      this.setIndex = 0;
    } else if (event.target.value === 'TAT') {
      this.setIndex = 1;
    } else if (event.target.value === 'MPR') {
      this.setIndex = 2;
    } else if (event.target.value === 'MOA') {
      this.setIndex = 3;
    } else if (event.target.value === 'VIN001') {
      this.setIndex = 4;
    } else if (event.target.value === 'VS01') { // Alice Cluster
      this.setIndex = 5;
    } else if (event.target.value === 'SKL') {
      this.setIndex = 6;
    } else if (event.target.value === 'TTW') {
      this.setIndex = 7;
    } else if (event.target.value === 'TMS') {
      this.setIndex = 8;
    } else if (event.target.value === 'BFA') {
      this.setIndex = 9;
    } else if (event.target.value === 'VIN002') {
      this.setIndex = 10;
    } else if (event.target.value === 'SDL') { // Lapis CLuster
      this.setIndex = 11;
    } else if (event.target.value === 'CFC') {
      this.setIndex = 12;
    } else if (event.target.value === 'LEL') {
      this.setIndex = 13;
    } else if (event.target.value === 'RDE') {
      this.setIndex = 14;
    } else if (event.target.value === 'ENW') {
      this.setIndex = 15;
    } else if (event.target.value === 'VIN003') {
      this.setIndex = 16;
    } else if (event.target.value === 'SDR') { // Reiya CLuster
      this.setIndex = 17;
    } else if (event.target.value === 'ACN') {
      this.setIndex = 18;
    } else if (event.target.value === 'ADK') {
      this.setIndex = 19;
    } else if (event.target.value === 'SDR6') {
      this.setIndex = 20;
    } else if (event.target.value === 'TSW') {
      this.setIndex = 21;
    } else if (event.target.value === 'WOM') {
      this.setIndex = 22;
    } else if (event.target.value === 'SDV') { // New Valhalla CLuster
      this.setIndex = 23;
    } else if (event.target.value === 'NDR') {
      this.setIndex = 24;
    } else if (event.target.value === 'SNV') {
      this.setIndex = 25;
    } else if (event.target.value === 'AOA') {
      this.setIndex = 26;
    } else if (event.target.value === 'DBV') {
      this.setIndex = 27;
    } else if (event.target.value === 'AO1') { // New Valhalla CLuster
      this.setIndex = 28;
    } else if (event.target.value === 'SDAO1') {
      this.setIndex = 29;
    } else if (event.target.value === 'AO2') {
      this.setIndex = 30;
    } else if (event.target.value === 'SDAO2') {
      this.setIndex = 31;
    } else if (event.target.value === 'AO3') {
      this.setIndex = 32;
    } else if (event.target.value === 'GITS2045SD') {
      this.setIndex = 33;
    } else if (event.target.value === 'GITS2045') {
      this.setIndex = 34;
    } else if (event.target.value === 'POFA') {
      this.setIndex = 35;
    }

    this.initializeCard();
  }

  // Move to the next card in the array
  nextCard() {
    if (this.cardIndex < this.cards[this.setIndex].card.length - 1) {
      this.cardIndex += 1;
      console.log(this.cardIndex);
      this.initializeCard();
    } else {
      console.log('This is the last card in the set.');
    }
  }

  // Move to the previous card in the array
  prevCard() {
    if (this.cardIndex !== 0) {
      this.cardIndex -= 1;
      console.log(this.cardIndex);
      this.initializeCard();
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
        console.log(this.cardIndex);
        this.initializeCard();
      } else {
        console.log('That value is outside of the current set.');
      }
    } else {
      console.log('That value is outside of the current set.');
    }
  }

}
