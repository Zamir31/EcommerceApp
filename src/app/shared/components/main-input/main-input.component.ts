import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-input',
  templateUrl: './main-input.component.html',
  styleUrls: ['./main-input.component.css']
})
export class MainInputComponent {

  @Input() _formControlName: string = '';
  @Input() parentForm!: FormGroup;
  @Input() placeholder?: string = '';

  // @Input() type: string = '';

}
