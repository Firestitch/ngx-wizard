import { Component, ViewChild } from '@angular/core';
import { KitchenSinkConfigureComponent } from '../kitchen-sink-configure';
import { FsExampleComponent } from '@firestitch/example';
import { FsMessage } from '@firestitch/message';
import { WizardConfig } from 'src/app/interfaces';
import { FsWizardComponent } from '@firestitch/package';

@Component({
  selector: 'vertical',
  templateUrl: 'vertical.component.html',
  styleUrls: ['vertical.component.scss']
})
export class VerticalComponent {

  @ViewChild('wizard', { static: true })
  public wizard: FsWizardComponent;

  public selected = 1;
  public config: WizardConfig = {
    steps: [
      {
        value: 1,
        label: 'Select Gender'
      },
      {
        value: { data: 'height' },
        label: 'Select Height'
      },
      {
        value: 'name',
        label: 'Select Name'
      },
      {
        value: 'confirmation',
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
