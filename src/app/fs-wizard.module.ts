import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsWizardComponent } from './components/wizard/wizard.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,

    MatIconModule,
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
