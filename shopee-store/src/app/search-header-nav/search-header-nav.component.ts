import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { StoreServiceService } from '../main-content/store-service.service'

@Component({
  selector: 'app-search-header-nav',
  templateUrl: './search-header-nav.component.html',
  styleUrls: ['./search-header-nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchHeaderNavComponent implements OnInit {

  public dataProducts = [];

  searchProduct = new FormControl();
  searchCategory = new FormControl();

  constructor(
    private _api: StoreServiceService
  ) { }

  getProducts(){
    this._api.getProducts()
    .subscribe((response) => {
      this.dataProducts = response;
      console.log("dataProducts: ", this.dataProducts);
    })
  }

  ngOnInit(): void {
    
    this.getProducts();

    this.searchProduct.valueChanges
    .pipe(debounceTime(500))
    .subscribe(value => {
      console.log('searchProduct has changed:', value)
    });

    this.searchCategory.valueChanges
    .pipe(debounceTime(500))
    .subscribe(value => {
      console.log('searchCategory has changed:', value)
    });
  }

}
