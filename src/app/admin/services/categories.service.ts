import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, WritableSignal, computed, inject, signal } from '@angular/core';
import { catchError, delay, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { ServicePostResponse } from '../interfaces/ServicePostResponse';
import { FormData } from 'src/app/shared/types/formData.type';
import { CategoriaResponse } from '../interfaces/categories/categoria-response-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private readonly baseUrl: string = environment.baseUrl;

  private http = inject(HttpClient);

  private _categorias: WritableSignal<CategoriaResponse[]> = signal([]);

  private _localStorageCategorias: WritableSignal<CategoriaResponse[]> = signal([]);

  public categorias = computed(() => this._categorias());

  public loadCategories: WritableSignal<boolean> = signal(localStorage.getItem('categories') ? false : true);

  public hasLoaded: WritableSignal<boolean> = signal(false);


  constructor() {
  }

  verifyLocalStorage(categoriasApi: CategoriaResponse[]): boolean {

    const categoriesLocalStorage = localStorage.getItem('categories');

    if (categoriesLocalStorage) {
      this.loadCategories.update(() => false);

      let categoriasStorage;
      try {
        categoriasStorage = JSON.parse(categoriesLocalStorage);
      } catch (error) {
        // console.error('Error al parsear categorias desde localStorage:', error);
        alert('Hubo un problema al cargar los datos. Por favor, intenta recargar la página o verifica la configuración de tu navegador.');
      }

      if ((Array.isArray(categoriasStorage) && categoriasStorage.length) === 0 && categoriasApi.length === 0) {
        this.hasLoaded.update(() => true)
        return false;
      }

      if ((Array.isArray(categoriasStorage) && categoriasStorage.length) === categoriasApi.length) {
        this._categorias.set(categoriasStorage);
        console.log('Storage')
        return false;
      } else {
        // this.loadCategories.update(() => true);
        return true;
      }
    }
    return true;

  }

  getCategorias(): Observable<CategoriaResponse[]> {

    const url = `${this.baseUrl}/categorias`;

    return this.http.get<CategoriaResponse[]>(url)
      .pipe(
        delay(this.loadCategories() ? 500 : 0),
        tap((categories) => {

          if (!this.verifyLocalStorage(categories)) return;

          this._categorias.set(categories);
          localStorage.setItem('categories', JSON.stringify(categories))
          console.log('Api')
          // }

          this.loadCategories.update(() => false)
          this.hasLoaded.update(() => true)

        }),
        catchError((error: HttpErrorResponse) => {
          this.loadCategories.update(() => false)

          let errorGet = error.error.message
          return throwError(() => new Error(errorGet));
        }))
      ;
  }

  postCategorie(data: FormData): Observable<ServicePostResponse> {

    const url = `${this.baseUrl}/categorias`;

    const body = data;

    return this.http.post<ServicePostResponse>(url, body)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorPost = error.error.message
          return throwError(() => new Error(errorPost));
        })
      )
  }
}
