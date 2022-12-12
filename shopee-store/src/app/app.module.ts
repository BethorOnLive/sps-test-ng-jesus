import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { SearchHeaderNavComponent } from './search-header-nav/search-header-nav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { StoreServiceService } from './main-content/store-service.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    SearchHeaderNavComponent,
    MainContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbDatepickerModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule
  ],
  providers: [HttpClientModule, StoreServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
