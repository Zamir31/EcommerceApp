import { Injectable } from '@angular/core';
import { Field } from '../interfaces/categories-request.interface';

@Injectable({
  providedIn: 'root'
})
export class FormConfigService {

  private categoriaForm: Field[] = [{
    label: 'Categoria',
    name: 'name',
    placeholder: 'Escriba el nombre de categoria',
    type: 'text',
    valor: ''
  },
  {
    label: 'Active',
    name: 'isActive',
    type: 'switch',
    valor: true
  },
  {
    label: 'URL Image',
    name: 'imageUrl',
    placeholder: 'Escriba el URL de la imagen',
    type: 'text',
    valor: ''
  }];

  private productoForm: Field[] = [{
    label: 'Product',
    name: 'name',
    placeholder: 'Escriba el nombre de producto',
    type: 'text',
    valor: '',
  },
  {
    label: 'URL Image',
    name: 'imageUrl',
    placeholder: 'Escriba la URL de la imagen',
    type: 'text',
    valor: ''
  },
  {
    label: 'Price',
    name: 'price',
    placeholder: 'Escriba el precio del product',
    type: 'number',
    valor: 0
  }];

  private UserForm: Field[] = [{
    label: 'Username',
    name: 'username',
    placeholder: 'Escriba el nombre del usuario',
    type: 'text',
    valor: '',
  },
  {
    label: 'Elija el rol',
    name: 'rol',
    type: 'radio',
    roles: ['administrador', 'cliente'],
    valor: 'administrador',
  }];

  constructor() { }

  getProductForm() {
    return this.productoForm;
  }

  getCategoriaForm() {
    return this.categoriaForm;
  }

  getUserForm() {
    return this.UserForm;
  }

  getFormConfig(route: string) {

    switch (route) {
      case 'addProduct':
        return this.getProductForm();
      case 'addCategorie':
        return this.getCategoriaForm();
      case 'addUser':
        return this.getUserForm();
      default: return [];
    }
  }
}
