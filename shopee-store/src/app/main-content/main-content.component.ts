import { Component, OnInit } from '@angular/core';
import { StoreServiceService } from './store-service.service'

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  products: any[] = [];

  constructor(
    private _api: StoreServiceService
  ) { }

  getProducts(){
    this._api.getProducts()
    .subscribe((response) => {
      this.products = response;
      console.log("this.types: ", this.products);
    })
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
