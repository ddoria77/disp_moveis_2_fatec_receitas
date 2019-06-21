import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  @ViewChild('username') username;
  @ViewChild('password') password;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  Registrar(){
    this.storage.set('login',this.username.value);
    this.storage.set('senha',this.password.value);
    console.log(this.username.value,this.password.value)
    this.navCtrl.push(HomePage);
  }

}
