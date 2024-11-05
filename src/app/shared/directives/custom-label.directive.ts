import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appCustomLabel]'
})
export class CustomLabelDirective {

  private htmlElement?: ElementRef<HTMLElement>;

  private _errors?: ValidationErrors | null;

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  setErrorMessage(): void {

    if (!this.htmlElement) return;

    if (!this._errors) return;

    const errors = Object.keys(this._errors);
    console.log(errors)

    //** Codigo que funciona agarrando el ultimo error del input */

    // for (const key of Object.keys(this._errors)) {
    //   switch(key) {
    //     case 'required':
    //       this.htmlElement!.nativeElement.innerText = 'Este campo es requerido';
    //       break;
    //     case 'minlength':
    //       this.htmlElement!.nativeElement.innerText = 'Este campo requiere un minimo de 4 caracteres';
    //       break;
    //     case 'invalidImageUrl':
    //       this.htmlElement!.nativeElement.innerText = 'El URL de imagen es invalido';
    //       break;
    //   }
    // }

    //** Codigo que funciona agarrando el primer error */


    for (const key of Object.keys(this._errors)) {
      this.htmlElement!.nativeElement.innerText = this.optionsError(key);
      break;
    }
  }

  optionsError(error: string): string {

    switch(error) {
      case 'required':
        return 'Este campo es requerido';
      case 'minlength':
        return this.htmlElement!.nativeElement.innerText = 'Este campo requiere un minimo de 4 caracteres';
      case 'invalidImageUrl':
        return this.htmlElement!.nativeElement.innerText = 'El URL de imagen es invalido';
    }

    return error;
  }

}
