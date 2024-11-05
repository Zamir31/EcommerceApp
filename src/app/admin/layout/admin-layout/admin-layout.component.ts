import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons, TooltipOptions } from 'primeng/api';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  public screenWidth: number = window.innerWidth;

  public showMenu: boolean = true;

  public items: MenuItem[] | undefined;

  constructor(){}

  ngOnInit(): void {

    this.items = [
      {
        label: 'Add',
        icon: PrimeIcons.PLUS,
        items: [
          {
            label: 'Add Product',
            routerLink: 'add/addProduct'
          },
          {
            label: 'Add Categorie',
            routerLink: 'add/addCategorie'
          },
          {
            label: 'Add User',
            routerLink: 'add/addUser'
          },
        ]
      },
      {
        label: 'Panel',
        icon: PrimeIcons.CHART_BAR,
        routerLink: 'panel'
      },
      {
        label: 'Categorias',
        icon: PrimeIcons.TH_LARGE,
        routerLink: 'categorias'
      },
      {
        label: 'Productos',
        icon: PrimeIcons.BOX,
        routerLink: 'productos'
      },
      {
        label: 'Users',
        icon: PrimeIcons.USERS,
        routerLink: 'users'
      },
      {
        label: 'Settings',
        icon: PrimeIcons.COG,
        routerLink: 'settings'
      }
    ]

    this.onResize();

  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.screenWidth = window.innerWidth;
    if( this.screenWidth >= 768 ) {
      return this.showMenu = false;
    }
    return this.showMenu = true;
  }
}
