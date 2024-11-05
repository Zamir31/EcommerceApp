import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLabelDirective } from './directives/custom-label.directive';
import { MainInputComponent } from './components/main-input/main-input.component';
import { MainFormComponent } from './components/main-form/main-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';
import { CapitalizeWordsPipe } from './pipes/capitalize-words.pipe';
import { FormConfigService } from './services/form-config-service.service';
import { CardComponent } from './components/card/card.component';
import { TableDataComponent } from './components/table-data/table-data.component';



@NgModule({
  declarations: [
    CustomLabelDirective,
    MainInputComponent,
    MainFormComponent,
    CapitalizeWordsPipe,
    CardComponent,
    TableDataComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeNGModule,
    RouterModule
  ],
  exports: [
    CustomLabelDirective,
    MainInputComponent,
    MainFormComponent,
    CapitalizeWordsPipe,
    CardComponent,
    TableDataComponent
  ]
})
export class SharedModule { }
