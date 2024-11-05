import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { PanelComponent } from './pages/panel/panel.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { UsersComponent } from './pages/users/users.component';
import { SettingsComponent } from './pages/settings/profile.component';
import { FormComponent } from './components/formView/formView.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    PanelComponent,
    ProductosComponent,
    CategoriasComponent,
    UsersComponent,
    SettingsComponent,
    FormComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class AdminModule { }
