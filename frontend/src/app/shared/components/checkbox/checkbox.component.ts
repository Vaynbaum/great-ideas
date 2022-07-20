import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CheckboxComponent),
    },
  ],
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  @Input()
  formConrol: AbstractControl | null | undefined;
  @Input()
  label: string | undefined;
  @Input()
  type: string | undefined;
  @Input()
  placeholder = '';
  @Input()
  messageErorFunc: any = () => {};
  _value: any;
  onChange: any = () => {};
  onTouched: any = () => {};

  get value() {
    return this._value;
  }
  @Input()
  set value(val: any) {
    this._value = val;
    this.onChange(this._value);
  }
  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  constructor() {}
  ngOnInit(): void {}
  onInput(e: any) {
    this.value = e.target.checked;
    console.log(this.value);
    this.onChange(this.value);
  }
}
