import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ProductProvider } from '../../providers/contact/contact';

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {
  title: string;
  form: FormGroup;
  product: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: ProductProvider,
    private toast: ToastController) {
      
      this.product = this.navParams.data.product || { };
    this.createForm();

    this.setupPageTitle();
  }
  
  private setupPageTitle(){
    this.title =this.navParams.data.product ? 'Alterando Produto' : 'Novo Produto';
  }
  
  createForm() {
    this.form = this.formBuilder.group({
      key: [this.product.key],
      name: [this.product.name],
      descrissao: [this.product.descrissao],
      embalagem: [this.product.embalagem],
      peso: [this.product.peso],
      unidade: [this.product.unidade],
      quantidade: [this.product.quantidade],
      valor: [this.product.valor]
    });
  }

  onSubmit(){
    if (this.form.valid) {
      this.provider.save(this.form.value)
      .then(() => {
        this.toast.create({ message: 'Produto salvo com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
      })
      .catch((e) => {
        this.toast.create({ message: 'Erro ao salvar o produto.', duration: 3000 }).present();
        console.error(e);
      })
    }
  }
   
}
