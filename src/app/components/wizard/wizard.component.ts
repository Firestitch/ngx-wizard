import { Component, HostBinding, Input, forwardRef } from '@angular/core';
import { WizardConfig } from '../../interfaces/wizard-config';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { findIndex } from 'lodash-es';


@Component({
  selector: 'fs-wizard',
  templateUrl: 'wizard.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FsWizardComponent),
      multi: true
    }
  ]
})
export class FsWizardComponent implements ControlValueAccessor {

  @HostBinding('class.fs-wizard') classFsWizard = true;

  @Input() config: WizardConfig = { steps: [] };

  public selected;
  public stepIndex;

  private _onTouched = () => {};
  private _onChange = (value: any) => {};

  constructor() {}

  registerOnChange(fn: (value: any) => any): void {
    this._onChange = fn
  }

  registerOnTouched(fn: () => any): void {
    this._onTouched = fn
  }

  writeValue(value: any) {
    this.selected = value;
  }

  next() {

    let index = this.getStepIndex();

    if (index >= 0) {
      index++;
      const next = this.config.steps[index];

      if (next) {
        this.stepIndex = index;
        this.select(next.name);
      }
    }
  }

  back() {
    this.stepIndex = this.getStepIndex();

    if (this.stepIndex > 0) {
      const back = this.config.steps[this.stepIndex - 1];

      if (back) {
        this.select(back.name);
      }
    }
  }

  first() {

    this.stepIndex = 0;
    const step = this.config.steps[this.stepIndex];

    if (step) {
      this.select(step.name);
    }
  }

  last() {

    this.stepIndex = this.config.steps.length - 1;
    const step = this.config.steps[this.stepIndex];

    if (step) {
      this.select(step.name);
    }
  }

  private getStepIndex() {
    return findIndex(this.config.steps, (item) => {
      return item.name === this.selected
    });
  }

  private select(name) {
    this.selected = name;
    this._onChange(this.selected);
  }
}
