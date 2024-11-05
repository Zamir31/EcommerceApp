import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DividerModule,
    TieredMenuModule,
    InputSwitchModule,
    RadioButtonModule,
    ToastModule,
    InputNumberModule,
    MessagesModule,
    CardModule,
    TableModule,
    SkeletonModule
  ]
})
export class PrimeNGModule { }
