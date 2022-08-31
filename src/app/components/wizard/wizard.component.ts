import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, HostBinding, Input, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { WizardConfig } from '../../interfaces/wizard-config';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsWizardComponent implements ControlValueAccessor {

  @HostBinding('class.fs-wizard') classFsWizard = true;

  @Input() config: WizardConfig = { steps: [] };

  public selected;
  public stepIndex;

  private _onTouched = () => {};
  private _onChange = (value: any) => {};

  constructor(
    private _cdRef: ChangeDetectorRef,
  ) {}

  public registerOnChange(fn: (value: any) => any): void {
    this._onChange = fn
  }

  public registerOnTouched(fn: () => any): void {
    this._onTouched = fn
  }

  public writeValue(value: any) {
    this.selected = value;
    this._cdRef.detectChanges();
  }

  public next() {
    let index = this.getStepIndex();

    if (index >= 0) {
      index++;
      const next = this.config.steps[index];

      if (next) {
        this.stepIndex = index;
        this.select(next.value);
      }
    }
  }

  public back() {
    this.stepIndex = this.getStepIndex();

    if (this.stepIndex > 0) {
      const back = this.config.steps[this.stepIndex - 1];

      if (back) {
        this.select(back.value);
      }
    }
  }

  public first() {
    this.stepIndex = 0;
    const step = this.config.steps[this.stepIndex];

    if (step) {
      this.select(step.value);
    }
  }

  public last() {
    this.stepIndex = this.config.steps.length - 1;
    const step = this.config.steps[this.stepIndex];

    if (step) {
      this.select(step.value);
    }
  }

  public select(name) {
    this.selected = name;
    this._cdRef.detectChanges();
    this._onChange(this.selected);
  }

  private getStepIndex() {
    return this.config.steps.findIndex((item) => {
      return item.value === this.selected
    });
  }
}
