import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsWizardComponent } from './components/wizard/wizard.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FsWizardComponent,
  ],
  declarations: [
    FsWizardComponent,
  ],
})
export class FsWizardModule {
  static forRoot(): ModuleWithProviders<FsWizardModule> {
    return {
      ngModule: FsWizardModule
    };
  }
}
