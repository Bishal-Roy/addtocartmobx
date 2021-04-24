import { action, computed, makeAutoObservable, reaction } from 'mobx';
import { createContext } from 'react';
import products from './data/products';
// export interface Todo {
//     id?: string;
//     name?: string;
//     image?: string;
//     description?: string;
//     brand?: string;
//     category?: string;
//     price?: number;
//     countInStock?: number;
//     rating?: number;
//     numReviews?: number;
//   }
class CartStore {
  constructor() {
    makeAutoObservable(this);
    reaction(
      () => this.info.length,
      (_) => localStorage.setItem('cartItems', JSON.stringify(this.store))
    );
  }
  store = [{id: '',name: '', image: '', price: 10 }];
  @action addToCart = (id: string) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      const {id, name, image, price } = product;
      this.store.push({id, name, image, price });
    }
  };

  @action removeFromStore = (id: string) => {
    this.store = this.store.filter(item => item.id !== id)
  };

  @computed get info() {
    return {
      length: this.store.length,
    };
  }
}

export default createContext(new CartStore());
