import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './frontend/product-list/product-list.component';
import { ProductEditComponent } from './backend/product-edit/product-edit.component';
import { ProductDetailComponent } from './frontend/product-detail/product-detail.component';
import { HomeComponent } from './frontend/home/home.component';
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { ProductManagerComponent } from './backend/product-manager/product-manager.component';
import { ProductAddComponent } from './backend/product-add/product-add.component';
import { AboutComponent } from './frontend/about/about.component';
import { ContactComponent } from './frontend/contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
   {path: 'admin', component: AdminComponent,
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        { path: 'dashboard', component: DashboardComponent},
        { path: 'products', component: ProductManagerComponent},
        { path: 'add-product', component: ProductAddComponent},
        { path: 'edit-product/:productID', component: ProductEditComponent},
        { path: 'delete-product/:productID', component: ProductManagerComponent},
      ]
   },
  {path: 'product-list', component: ProductListComponent},
  {path: 'product/edit/:productID', component: ProductEditComponent},
  {path: 'product/:productID', component: ProductDetailComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
