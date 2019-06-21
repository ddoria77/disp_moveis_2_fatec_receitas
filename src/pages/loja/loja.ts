import { ProductProvider } from './../../providers/contact/contact';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-loja',
  templateUrl: 'loja.html'
})
export class LojaPage {
  products: Observable<any>;

  constructor(public navCtrl: NavController, private provider: ProductProvider,
    private toast: ToastController) {

    this.products = this.provider.getAll();
  }

  newProduct() {
    this.navCtrl.push('ProdutosPage');
    this.products = this.provider.getAll();
  }

  editProduct(product: any) {
    // Maneira 1
    this.navCtrl.push('ProdutosPage', { product: product });

  }

  removeProduct(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Contato removido sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 }).present();
        });
    }
  }
}
