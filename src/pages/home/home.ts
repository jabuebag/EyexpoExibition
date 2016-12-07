import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {PanoPage} from '../pano/pano'

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushPano() {
  	this.navCtrl.push(PanoPage, {
      id: "123",
      name: "Carl"
    });
  }

}
