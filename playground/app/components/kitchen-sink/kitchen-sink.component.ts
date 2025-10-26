import { Component, ViewChild } from '@angular/core';

import { FsWizardComponent } from '@firestitch/package';

import { WizardConfig } from 'src/app/interfaces';
import { FsWizardComponent as FsWizardComponent_1 } from '../../../../src/app/components/wizard/wizard.component';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'kitchen-sink',
    templateUrl: 'kitchen-sink.component.html',
    styleUrls: ['kitchen-sink.component.scss'],
    standalone: true,
    imports: [
        FsWizardComponent_1,
        FormsModule,
        MatButton,
        JsonPipe,
    ],
})
export class KitchenSinkComponent {

  @ViewChild('wizard', { static: true })
  public wizard: FsWizardComponent;

  public selected = 'gender';
  public config: WizardConfig = {
    steps: [
      {
        name: 'gender',
        label: 'Select Gender',
      },
      {
        name: 'height',
        label: 'Select Height',
      },
      {
        name: 'name',
        label: 'Select Name',
      },
      {
        name: 'confirmation',
        label: 'Confirmation',
      },
    ],
  };

  back() {
    this.wizard.back();
  }

  next() {
    this.wizard.next();
  }

  first() {
    this.wizard.first();
  }

  last() {
    this.wizard.last();
  }
}
