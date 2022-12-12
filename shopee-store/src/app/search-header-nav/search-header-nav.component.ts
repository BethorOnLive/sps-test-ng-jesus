import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-header-nav',
  templateUrl: './search-header-nav.component.html',
  styleUrls: ['./search-header-nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchHeaderNavComponent implements OnInit {

  public dataProducts = [
    {id:1, product:"bagpack" },
    {id:2, product:"tshirt" },
    {id:3, product:"jeans" },
  ]

  searchProduct = new FormControl();
  searchCategory = new FormControl();

  constructor() { }

  ngOnInit(): void {
    
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
