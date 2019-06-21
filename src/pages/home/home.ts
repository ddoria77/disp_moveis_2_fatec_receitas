import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistroPage } from '../registro/registro';
import { Storage } from '@ionic/storage';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController , public alertCtrl: AlertController,private storage: Storage) {
  }

  signIn(){
    if (this.username.value == this.storage.get('login') && this.password.value==this.storage.get('senha')) {
      this.navCtrl.push(LoginPage);
    }else{
      this.showAlert();
    }

  }
  Registrar(params){
    if (!params) params = {};
    this.navCtrl.push(RegistroPage);
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Acesso Negado',
      subTitle: 'Por favor verifique suas credenciais',
      buttons: ['OK']
    });
    alert.present();
  }
}
