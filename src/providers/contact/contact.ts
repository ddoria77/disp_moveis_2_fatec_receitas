import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductProvider {
  private PATH = 'products/';

  constructor(private db: AngularFireDatabase) { }

  getAll() { //Consulta todos
    return this.db.list(this.PATH, ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
      })
  }


  get(key: string){ //consulta um
    return this.db.object(this.PATH + key)
    .snapshotChanges()
    .map(p => {
      return{key: p.key, ...p.payload.val()};
    })
  }

  save(product: any){ //salvar
    return new Promise((resolve, reject) => {
      if (product.key) {
        this.db.list(this.PATH)
          .update(product.key, { name: product.name, descrissao: product.descrissao, embalagem: product.embalagem, peso: product.peso, unidade: product.unidade,
          quantidade: product.quantidade, valor: product.valor })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ name: product.name, descrissao: product.descrissao, embalagem: product.embalagem, peso: product.peso, unidade: product.unidade,
            quantidade: product.quantidade, valor: product.valor })
          .then(() => resolve());
      }
    })
  }

  remove(key: string){ //remover
    return this.db.list(this.PATH).remove(key);
  }

}
