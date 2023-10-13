import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  newItemName: string="";
  newItemDescription: string="";
  newItemPrice: number=0;
  itemNameError: string="";
  descriptionError: string="";
  priceError: string="";

  addItem() {
  
    if (!this.newItemName) {
      this.itemNameError = 'Item name is required';
    } else {
      this.itemNameError = '';
    }
    if (this.newItemDescription && this.newItemDescription.length > 100) {
      this.descriptionError = 'Description should be 100 characters or less';
    } else {
      this.descriptionError = '';
    }

    if (!this.newItemPrice || isNaN(this.newItemPrice) || this.newItemPrice <= 0) {
      this.priceError = 'Price should be a valid, positive number';
    } else {
      this.priceError = '';
    }

    if (!this.itemNameError && !this.descriptionError && !this.priceError) {
      console.log('Item Name:', this.newItemName);
      console.log('Description:', this.newItemDescription);
      console.log('Price:', this.newItemPrice);
    }
  }
}
