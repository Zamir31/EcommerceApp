import { InputType } from "../types/inputsType.type";

export interface Field {
  label: string,
  name: string,
  placeholder?: string,
  type: InputType,
  roles?: string[],
  valor: string | number | boolean
}
