import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHeaderNavComponent } from './search-header-nav.component';

describe('SearchHeaderNavComponent', () => {
  let component: SearchHeaderNavComponent;
  let fixture: ComponentFixture<SearchHeaderNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchHeaderNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchHeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
