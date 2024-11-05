import { Component, Input, OnInit } from '@angular/core';
import { ProductResponse } from 'src/app/admin/interfaces/products/product-response.interface';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {

  public mostrarskeleton = true;

  @Input()
  public products?: ProductResponse[];

  @Input()
  public loader?: boolean;

  public cols!: Column[];

  ngOnInit(): void {
    this.cols = [
      {
        field: '_id', header: 'Id'
      },
      {
        field: 'name', header: 'Name'
      },
      {
        field: 'idCategoria', header: 'Categoria'
      }
    ],

      setTimeout(() => {
        this.mostrarskeleton = false;
      }, 1000);

  }
}
