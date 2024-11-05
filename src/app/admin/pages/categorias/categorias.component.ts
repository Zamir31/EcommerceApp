import { Component, computed, inject, OnInit, WritableSignal } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  private categoriasService = inject(CategoriesService);

  public categorias = computed(() => this.categoriasService.categorias());

  // public loadCategorias = computed(() => { return this.categoriasService.loadCategories() });
  public loadCategorias = computed(() => this.categoriasService.loadCategories());

  public hasLoaded = computed(() => this.categoriasService.hasLoaded());

  public skeletons = Array(6).fill(0);


  constructor() {

  }

  ngOnInit(): void {

    this.categoriasService.getCategorias().subscribe();

  }

}
