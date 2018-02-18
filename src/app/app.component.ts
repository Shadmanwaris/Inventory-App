import { Component } from '@angular/core';
import { Product } from './product.model';

/**
 * @InventoryApp: the top level component for our applications
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[]; //Have a property 'product' which is a 'Product' object

  constructor () {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoe',
        '/assets/images/products/black-shoes.jpg',
        ['Men','shoes','Running Shoes'],
        109.99
      ),
      new Product (
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women','Apparel','Jackets & Vests'],
        238.99
      ),
      new Product (
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men','Accessories','Hats'],
        29.99
      )
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
}

}
