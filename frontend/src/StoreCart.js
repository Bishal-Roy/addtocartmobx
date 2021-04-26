import { action, computed, makeObservable, observable, reaction } from 'mobx';
import { createContext } from 'react';
import products from './data/products';

class CartStore {
  store = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];
  constructor() {
    makeObservable(this, {
      store: observable,
      addToCart: action,
      removeFromStore: action,
      info: computed,
    });
    reaction(
      () => this.store.length,
      () => console.log(this.store.length)
    );
  }

  addToCart = (id) => {
    const cartItemsFromStorage = localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [];
    const product = products.find((p) => p.id === id);
    if (product) {
      const { id, name, image, price } = product;
      this.store.push({ id, name, image, price });
      cartItemsFromStorage.push({ id, name, image, price });
      localStorage.setItem('cartItems', JSON.stringify(cartItemsFromStorage));
    }
  };

  removeFromStore = (id) => {
    this.store = this.store.filter((item) => item.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(this.store));
  };

  get info() {
    return {
      length: this.store.length,
    };
  }
}

export default createContext(new CartStore());
