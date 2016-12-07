import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Pano page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pano',
  templateUrl: 'pano.html'
})
export class PanoPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PanoPage Page');
  }

  popPano() {
  	this.navCtrl.pop();
  }

}
