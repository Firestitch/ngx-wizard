import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { StepConfig, WizardConfig } from '../../interfaces';


@Component({
  selector: 'fs-wizard',
  templateUrl: 'wizard.component.html',
  styleUrls: ['wizard.component.scss'],
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

  @Input()
  public config: WizardConfig = { steps: [] };

  @Input()
  public orientation: 'horizontal' | 'vertical' = 'horizontal';

  @HostBinding('class.fs-wizard')
  public classFsWizard = true;

  @HostBinding('class.vertical')
  public get classVertical(): boolean {
    return this.orientation === 'vertical';
  }

  public selected;
  public stepIndex: number;

  private _onTouched = () => {};
  private _onChange = (value: any) => {};

  constructor(
    private _cdRef: ChangeDetectorRef,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  public registerOnChange(fn: (value: any) => any): void {
    this._onChange = fn
  }

  public registerOnTouched(fn: () => any): void {
    this._onTouched = fn
  }

  public writeValue(value: any) {
    this.select(value);
    this._cdRef.detectChanges();
  }

  public getNextStep(): StepConfig {
    return this.config.steps[this.getStepIndex() + 1] || null;
  }

  public getBackStep(): StepConfig {
    return this.config.steps[this.getStepIndex() - 1] || null;
  }

  public navigateNext() {
    let step = this.getNextStep();

    if (step) {
      this._router.navigate(step.path, { relativeTo: this._route });
    }
  }

  public navigateBack() {
    let step = this.getBackStep();

    if (step) {
      this._router.navigate(step.path, { relativeTo: this._route });
    }
  }

  public.next(null) {
    let step = this.getNextStep();

    if (step) {
      this.select(step.name);
    }
  }

  public back() {
    let step = this.getBackStep();

    if (step) {
      this.select(step.name);
    }
  }

  public first() {
    this.stepIndex = 0;
    const step = this.config.steps[this.stepIndex];

    if (step) {
      this.select(step.name);
    }
  }

  public last() {
    this.stepIndex = this.config.steps.length - 1;
    const step = this.config.steps[this.stepIndex];

    if (step) {
      this.select(step.name);
    }
  }

  public select(name: any) {
    this.stepIndex = this.config.steps
      .findIndex((step: StepConfig) => step.name === name);

    this.selected = name;
    this._cdRef.detectChanges();
    this._onChange(this.selected);
  }

  private getStepIndex() {
    return this.config.steps.findIndex((item) => {
      return item.name === this.selected
    });
  }
}
