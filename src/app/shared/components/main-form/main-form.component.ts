import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormConfigService } from '../../services/form-config-service.service';
import { Field } from '../../interfaces/categories-request.interface';
import { FormData } from '../../types/formData.type';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {


  @Output() formSubmitted = new EventEmitter<FormData>();

  formConfig: Field[] = [];

  private route = inject(ActivatedRoute);

  private formBuilder = inject(FormBuilder);

  private formConfigService = inject(FormConfigService);

  mainForm!: FormGroup;

  ngOnInit(): void {
    this.route.url.subscribe(data => {
      // const path = data[0].path.slice(0, 3) + " " + data[0].path.slice(3);
      const path = data.join('/');
      this.formConfig = this.formConfigService.getFormConfig(path);
      this.createForm();
    });
  }


  createForm() {
    let group: Record<string, [string|number|boolean]> = {};
    this.formConfig.forEach( (field) => {
      group[field.name] = [field.valor];
    });
    this.mainForm = this.formBuilder.group(group);
  }

  onSubmit():void {
    if( this.mainForm.valid ) {
      this.formSubmitted.emit(this.mainForm.value as FormData)
    }
  }

}
