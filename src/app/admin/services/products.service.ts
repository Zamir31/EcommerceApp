import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { catchError, delay, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { ServicePostResponse } from '../interfaces/ServicePostResponse';
import { FormData } from 'src/app/shared/types/formData.type';
import { ProductResponse } from '../interfaces/products/product-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  private _products: WritableSignal<ProductResponse[]> = signal([]);

  public products = computed(() => this._products());
  // public loadProducts: WritableSignal<boolean> = signal(true);

  constructor() { }

  getProducts(): Observable<ProductResponse[]> {
    const url = `${this.baseUrl}/productos`;

    return this.http.get<ProductResponse[]>(url)
      .pipe(
        tap((products) => {
          this._products.set(products);
        }),
        catchError((error: HttpErrorResponse) => {
          let errorGet = error.error.message
          return throwError(() => new Error(errorGet))
        }));
  }

  postProduct(data: FormData): Observable<ServicePostResponse> {

    const url = `${this.baseUrl}/productos`;

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
