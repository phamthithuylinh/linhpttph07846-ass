import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductAddComponent } from './backend/product-add/product-add.component';
import { HeaderComponent } from './frontend/header/header.component';
import { ProductListComponent } from './frontend/product-list/product-list.component';
import { FooterComponent } from './frontend/footer/footer.component';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductManagerComponent } from './backend/product-manager/product-manager.component';
import { ProductDetailComponent } from './frontend/product-detail/product-detail.component';
import { HomeComponent } from './frontend/home/home.component';
import { ProductEditComponent } from './backend/product-edit/product-edit.component';
import { AdminTopbarComponent } from './backend/admin-topbar/admin-topbar.component';
import { AdminSlidebarComponent } from './backend/admin-slidebar/admin-slidebar.component';
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';


@NgModule({
  imports:      [ BrowserModule,AppRoutingModule, FormsModule,HttpClientModule],
  declarations: [ AppComponent, HelloComponent, ProductAddComponent, HeaderComponent, ProductListComponent, FooterComponent, ProductManagerComponent, ProductDetailComponent, HomeComponent, ProductEditComponent, AdminTopbarComponent, AdminSlidebarComponent, AdminComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
