import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Product } from '../product.model';

/**
 * @productList: A component for rendering all ProductRows 
 * and Storing the currently selected Product
 */

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

  /**
   * @Input productList - the Product[] passed to us
   */

  @Input() productList: Product[];

  /**
   * @Output onProductSelected - outputs the current 
   * Product whenever a new Product is Selected
   */

  @Output() onProductSelected: EventEmitter<Product>;


  /**
   *  @ property currentProduct - local State containing  
   *  the currently selected 'Product' 
   */

  private currentProduct: Product;

  constructor() { 
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

}
