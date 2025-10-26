import { Component } from '@angular/core';
import { environment } from '@env';
import { FsExampleModule } from '@firestitch/example';
import { KitchenSinkComponent } from '../kitchen-sink/kitchen-sink.component';
import { VerticalComponent } from '../vertical/vertical.component';


@Component({
    templateUrl: 'examples.component.html',
    standalone: true,
    imports: [FsExampleModule, KitchenSinkComponent, VerticalComponent]
})
export class ExamplesComponent {
  public config = environment;
}
