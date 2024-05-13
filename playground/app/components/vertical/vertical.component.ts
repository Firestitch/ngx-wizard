import { Component, ViewChild } from '@angular/core';
import { FsExampleComponent } from '@firestitch/example';
import { FsMessage } from '@firestitch/message';
import { FsWizardComponent } from '@firestitch/package';
import { WizardConfig } from 'src/app/interfaces';

@Component({
  selector: 'vertical',
  templateUrl: 'vertical.component.html',
  styleUrls: ['vertical.component.scss']
})
export class VerticalComponent {

  @ViewChild('wizard', { static: true })
  public wizard: FsWizardComponent;

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
