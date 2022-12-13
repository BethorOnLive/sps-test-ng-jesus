import { Component, OnInit } from '@angular/core';
import { StoreServiceService } from './store-service.service';
import { SharedServiceService } from '../shared-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  
  sub: Subscription;
  
  private _dataProducts:Array<any> = [];
  

  public dataProductsTemp:Array<any> = [];

  constructor(
    private _api: StoreServiceService,
    private sharedService: SharedServiceService
  ) { }

  getProducts(){
    this._api.getProducts()
    .subscribe((response) => {
      this._dataProducts = response;
      this.dataProductsTemp = response;
      console.log("dataProductsTemp: ", this.dataProductsTemp);
    })
  }

  ngOnInit(): void {
    this.getProducts();

    this.sharedService.getData().subscribe(result =>{    
      console.log("result: ", result);
      
      const temporal = this._dataProducts.filter(item => item.title.toLowerCase().includes(result.toLowerCase()));
  
      console.log("temporal: ", temporal);
      this.dataProductsTemp = temporal;
   
    })
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe()
    }
  }

}
