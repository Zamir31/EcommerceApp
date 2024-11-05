import { CategoriaResponse } from './../../../admin/interfaces/categories/categoria-response-interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public categoria?: CategoriaResponse;

  @Input()
  public loader?: boolean;

  public imageLoaded: boolean = false;



  ngOnInit(): void {

  }

  imageischanged(): void {
    this.imageLoaded = true;
  }

  // _categorias!: () => CategoriaResponse[];

  // public categorias = computed(() => this._categorias());
}
