import { Injectable } from '@angular/core';

// Promos Import
import pr from 'src/assets/Promos/promos.json';

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

// Saga Cluster Imports
import edl from 'src/assets/Saga/edl.json';
import msw from 'src/assets/Saga/msw.json';

@Injectable({
  providedIn: 'root'
})
export class CardFetcherService {
  private card: any;
  private cards = [];

  constructor() {
    this.cards.push(pr); // Promos
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
    this.cards.push(edl); // Saga Cluster
    this.cards.push(msw);
  }

  getCards() {
    return this.cards;
  }

  getCard() {
    return this.card;
  }

  setCard(c) {
    this.card = c;
  }

}
