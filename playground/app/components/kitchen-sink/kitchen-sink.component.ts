import { Component, ViewChild } from '@angular/core';
import { KitchenSinkConfigureComponent } from '../kitchen-sink-configure';
import { FsExampleComponent } from '@firestitch/example';
import { FsMessage } from '@firestitch/message';
import { WizardConfig } from 'src/app/interfaces';
import { FsWizardComponent } from '@firestitch/package';

@Component({
  selector: 'kitchen-sink',
  templateUrl: 'kitchen-sink.component.html',
  styleUrls: ['kitchen-sink.component.scss']
})
export class KitchenSinkComponent {

  @ViewChild('wizard') wizard: FsWizardComponent;

  public selected = 'gender';
  public config: WizardConfig = {
    steps: [
      {
        name: 'gender',
        label: 'Select Gender'
      },
      {
        name: 'height',
        label: 'Select Height'
      },
      {
        name: 'name',
        label: 'Select Name'
      },
      {
        name: 'confirmation',
        label: 'Confirmation'
      }
    ]
  };

  constructor(private exampleComponent: FsExampleComponent,
              private message: FsMessage) {
    //exampleComponent.setConfigureComponent(KitchenSinkConfigureComponent, { config: this.config });
  }

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
