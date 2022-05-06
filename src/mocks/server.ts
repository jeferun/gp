import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'admin/api/v1/';
    this.get('products', () => (
      [
        { id: 1, name: 'Rockville', type: {id: 1, name: 'Electric'}, colors: 'yellow/black', imgUrl: '' },
        { id: 2, name: 'Serious', type: {id: 2, name: 'Normal'}, colors: 'blue/white', imgUrl: 'https://i.linio.com/p/23dbd40e7b1b2ec4b28bb1629c504a11-product.webp' },
        { id: 3, name: 'Serious', type: {id: 2, name: 'Normal'}, colors: 'white/green', imgUrl: '' },
        { id: 4, name: 'Rockville', type: {id: 3, name: 'Old'}, colors: 'black', imgUrl: 'https://i.linio.com/p/23dbd40e7b1b2ec4b28bb1629c504a11-product.webp' },
        { id: 5, name: 'Vermot', type: {id: 3, name: 'Old'}, colors: 'green/black', imgUrl: 'https://i.linio.com/p/23dbd40e7b1b2ec4b28bb1629c504a11-product.webp' },
        { id: 6, name: 'Vermont', type: {id: 3, name: 'Old'}, colors: 'yellow/black', imgUrl: 'https://i.linio.com/p/23dbd40e7b1b2ec4b28bb1629c504a11-product.webp' },
        { id: 7, name: 'Tria 8 Wave', type: {id: 3, name: 'Old'}, colors: 'white', imgUrl: '' },
        { id: 8, name: 'Rockville', type: {id: 3, name: 'Old'}, colors: 'blueviolet', imgUrl: '' },
        { id: 9, name: 'Tria 8 Wave', type: {id: 3, name: 'Old'}, colors: 'red/black', imgUrl: 'https://i.linio.com/p/23dbd40e7b1b2ec4b28bb1629c504a11-product.webp' },
        { id: 10, name: 'Orltler', type: {id: 2, name: 'Normal'}, colors: '', imgUrl: '' },
      ]
    ));
    this.get('productTypes', () => (
      [
        { id: 1, name: 'Electric' },
        { id: 2, name: 'Normal' },
        { id: 3, name: 'Old' },
      ]
    ));
  }
});