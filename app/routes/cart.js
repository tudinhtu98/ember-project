import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const items = [{ price: 92 }, { price: 22 }];
    return items;
  }
}
