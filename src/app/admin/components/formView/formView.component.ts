import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { imageUrlValidator } from 'src/app/shared/validators/validators';

import { MessageService } from 'primeng/api';
import { CategoriesService } from '../../services/categories.service';
import { FormData } from 'src/app/shared/types/formData.type';
import { CategoriaRequest } from '../../interfaces/categories/categorie-request.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-form-component',
  templateUrl: './formView.component.html',
  styleUrls: ['./formView.component.css'],
  providers: [MessageService]
})
export class FormComponent implements OnInit {

  public title: string = '';

  private message?: boolean;

  private route = inject(ActivatedRoute);

  private serviceProduct = inject(ProductsService);

  // private formBuilder = inject(FormBuilder);

  // categoriaForm: FormGroup = this.formBuilder.group({
  //   name: ['', [Validators.required, Validators.minLength(4)]],
  //   isActive: [false, Validators.required],
  //   //** En esta posicion porque en la logica de la directiva en el array de errores del input al recorrerlo con un for agarra el ultimo error */
  //   // imageUrl: ['', [imageUrlValidator(), Validators.required] ]
  //   //** La posicion normal, para tomar el error segun el orden */
  //   imageUrl: ['', [Validators.required, imageUrlValidator()]]
  // });

  constructor(private messageService: MessageService, private categorieService: CategoriesService) { }

  ngOnInit(): void {
    this.route.url.subscribe(data => {
      this.title = data[0].path.slice(0, 3) + " " + data[0].path.slice(3);
    })
  }

  postFormToService(data: FormData) {

    // if (this.categoriaForm.invalid) {
    //   return this.categoriaForm.markAllAsTouched();
    // }

    switch (this.title) {
      case 'add Product':
        this.servicePostProduct(data);
        break;
      case 'add Categorie':
        this.servicePostCategoria(data);
        break;
      case 'add User':
        return;
    }
  }

  servicePostCategoria(data: FormData): void {
    this.categorieService.postCategorie(data).subscribe(data => {
      switch (data.statusCode) {
        case 201:
          this.message = true;
          this.serviceMessage(data.message);
          break;
      }
    },
      error => {
        this.message = false;
        return this.serviceMessage(error.message)
      })
  }

  servicePostProduct(data: FormData): void {
    this.serviceProduct.postProduct(data).subscribe(data => {
      switch (data.statusCode) {
        case 201:
          this.message = true;
          this.serviceMessage(data.message);
          break;
      }
    },
      error => {
        this.message = false;
        return this.serviceMessage(error.message)
      });
  }

  serviceMessage(msj: string): void {
    if (this.message) {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: `${msj}` });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Lo siento', detail: `${msj}` });
    }
  }
}
