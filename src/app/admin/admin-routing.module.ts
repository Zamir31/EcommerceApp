import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Components */
import { PanelComponent } from './pages/panel/panel.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { UsersComponent } from './pages/users/users.component';
import { SettingsComponent } from './pages/settings/profile.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { FormComponent } from './components/formView/formView.component';


const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent,
    children: [
      { path: 'panel', component: PanelComponent },
      {
        path: 'add', component: AddProductComponent, children: [
          { path: 'addProduct', component: FormComponent },
          { path: 'updateProduct/:id', component: FormComponent },
          { path: 'addCategorie', component: FormComponent },
          { path: 'updateCategorie/:id', component: FormComponent },
          { path: 'addUser', component: FormComponent },
          { path: 'updateUser/:id', component: FormComponent },
          { path: '**', redirectTo: 'addProduct'}
        ]
      },
      { path: 'categorias', component: CategoriasComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'users', component: UsersComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '**', redirectTo: 'panel' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
