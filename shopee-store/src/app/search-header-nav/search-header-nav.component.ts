import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { StoreServiceService } from '../main-content/store-service.service';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-search-header-nav',
  templateUrl: './search-header-nav.component.html',
  styleUrls: ['./search-header-nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchHeaderNavComponent implements OnInit {

  private _dataProducts:Array<any> = [];
  public dataProductsTemp:Array<any> = [];

  searchProduct = new FormControl();
  searchCategory = new FormControl();

  constructor(
    private _api: StoreServiceService,
    private sharedService: SharedServiceService
  ) { }

  getProducts(){
    this._api.getProducts()
    .subscribe((response) => {
      this._dataProducts = response;
      this.dataProductsTemp = response;
      console.log("dataProducts: ", this._dataProducts);
    })
  }

  ngOnInit(): void {
    
    this.getProducts();

    this.searchProduct.valueChanges
    .pipe(debounceTime(500))
    .subscribe(value => {
      //Con esta función enviamos el valor que recupera el input hacia el componente donde se renderizan las cards
      this.sharedService.setData(value);
    });

    this.searchCategory.valueChanges
    .pipe(debounceTime(500))
    .subscribe(value => {
     
    console.log("Value category:", value.category);
    
    //Aquí tuve dificultad para hacer el filtro por categoria :(

    });

  }

}
