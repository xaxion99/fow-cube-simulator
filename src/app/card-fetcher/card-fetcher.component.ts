import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-card-fetcher',
  templateUrl: './card-fetcher.component.html',
  styleUrls: ['./card-fetcher.component.scss']
})

export class CardFetcherComponent implements OnInit {

  // Link Tester
  imgLink = 'http://www.fowdb.altervista.org/images/cards/8/msw/001.jpg';

  // Cluster Link Templates
  imgGrimm = 'https://www.fowdb.altervista.org/images/cards/2/';
  imgAlice = 'https://www.fowdb.altervista.org/images/cards/3/';
  imgLapis = 'https://www.fowdb.altervista.org/images/cards/4/';
  imgReiya = 'https://www.fowdb.altervista.org/images/cards/5/';
  imgNewValhalla = 'https://www.fowdb.altervista.org/images/cards/6/';
  imgAliceOrigin = 'https://www.fowdb.altervista.org/images/cards/7/';
  imgSaga = 'https://www.fowdb.altervista.org/images/cards/8/';

  // Array for image links
  imgLinkArray = [];

  public cubeArray: Card[] = [];

  constructor(private http: HttpClient){
    this.http.get('assets/cube.csv', {responseType: 'text'}).subscribe(
      data => {
        const csvToRowArray = data.split('\n');
        for (let index = 1; index < csvToRowArray.length - 1; index++) {
          const row = csvToRowArray[index].split(',');
          this.cubeArray.push(new Card(row[0], row[1], row[2], row[3]));
          this.linkbuilder(row);
        }
        console.log(this.cubeArray);
        console.log(this.imgLinkArray.length);
        },
        error => {
            console.log(error);
        });
  }

  ngOnInit(): void {
  }

  linkbuilder(r) {
    let tempLink;

    if (r[0] === 'cmf' || r[0] === 'tat' || r[0] === 'mpr' || r[0] === 'moa' || r[0] === 'vin001') {
      console.log('Grimm');
      tempLink = this.imgGrimm + r[0] + '/' + r[1] + '.jpg';
      console.log(tempLink);
      this.imgLinkArray.push(tempLink);
    } else if (r[0] === 'skl' || r[0] === 'ttw' || r[0] === 'tms' || r[0] === 'bfa' || r[0] === 'vin002') {
      console.log('Alice');
      tempLink = this.imgAlice + r[0] + '/' + r[1] + '.jpg';
      console.log(tempLink);
      this.imgLinkArray.push(tempLink);
    } else if (r[0] === 'cfc' || r[0] === 'lel' || r[0] === 'rde' || r[0] === 'enw' || r[0] === 'vin003'
               || r[0] === 'sdl1' || r[0] === 'sdl2' || r[0] === 'sdl3' || r[0] === 'sdl4' || r[0] === 'sdl5') {
      console.log('Lapis');
      tempLink = this.imgLapis + r[0] + '/' + r[1] + '.jpg';
      console.log(tempLink);
      this.imgLinkArray.push(tempLink);
    } else if (r[0] === 'acn' || r[0] === 'adk' || r[0] === 'tsw' || r[0] === 'wom' || r[0] === 'sdr1'
               || r[0] === 'sdr2' || r[0] === 'sdr3' || r[0] === 'sdr4' || r[0] === 'sdr5') {
      console.log('Reiya');
      tempLink = this.imgReiya + r[0] + '/' + r[1] + '.jpg';
      console.log(tempLink);
      this.imgLinkArray.push(tempLink);
    } else if (r[0] === 'ndr' || r[0] === 'snv' || r[0] === 'aoa' || r[0] === 'dbv' || r[0] === 'sdv1'
               || r[0] === 'sdv2' || r[0] === 'sdv3' || r[0] === 'sdv4' || r[0] === 'sdv5') {
      console.log('New Valhalla');
      tempLink = this.imgNewValhalla + r[0] + '/' + r[1] + '.jpg';
      console.log(tempLink);
      this.imgLinkArray.push(tempLink);
    } else if (r[0] === 'ao1' || r[0] === 'ao2' || r[0] === 'ao3' || r[0] === 'pofa' || r[0] === 'sdao1'
               || r[0] === 'sdao2' || r[0] === 'gits2045' || r[0] === 'gits2045sd' || r[0] === 'aopr') {
      console.log('Alice Origin');
      tempLink = this.imgAliceOrigin + r[0] + '/' + r[1] + '.jpg';
      console.log(tempLink);
      this.imgLinkArray.push(tempLink);
    } else if (r[0] === 'edl') { // || r[0] === 'msw'
      console.log('Saga');
      tempLink = this.imgSaga + r[0] + '/' + r[1] + '.jpg';
      console.log(tempLink);
      this.imgLinkArray.push(tempLink);
    }
  }
}

export class Card {
  // tslint:disable: ban-types
  set: String;
  num: String;
  name: String;
  type: String;
  cost: Cost;

  constructor(set: String, num: String, name: String, type: String) { // , cost: Cost
    this.set = set;
    this.num = num;
    this.name = name;
    this.type = type;
  }
}

export class Cost {
  light: Number;
  fire: Number;
  water: Number;
  wind: Number;
  darkness: Number;
  v: Number;

  constructor(light: Number, fire: Number, water: Number, wind: Number, darkness: Number, v: Number) {
    this.light = light;
    this.fire = fire;
    this.water = water;
    this.wind = wind;
    this.darkness = darkness;
    this.v = v;
  }
}
