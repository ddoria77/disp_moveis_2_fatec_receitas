import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { LojaPage } from '../loja/loja';
import { ContatoPage } from '../contato/contato';
import { RecipesPage } from '../recipes/recipes';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,private batteryStatus: BatteryStatus) {
  }
  goToFeed(params){
    if (!params) params = {};
    this.navCtrl.push(FeedPage);
  }goToStore(params){
    if (!params) params = {};
    this.navCtrl.push(LojaPage);
  }goToContato(params){
    if (!params) params = {};
    this.navCtrl.push(ContatoPage);
  }goToReceitas(params){
    if (!params) params = {};
    this.navCtrl.push(RecipesPage);
  }
  const subscription = this.batteryStatus.onChange().subscribe(status => {
    console.log(status.level, status.isPlugged);
 });
}
