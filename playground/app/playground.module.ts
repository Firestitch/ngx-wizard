import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { FsExampleModule } from '@firestitch/example';
import { FsLabelModule } from '@firestitch/label';
import { FsMessageModule } from '@firestitch/message';
import { FsWizardModule } from '@firestitch/package';

import { AppComponent } from './app.component';
import {
  ExamplesComponent,
  KitchenSinkComponent,
  VerticalComponent,
} from './components';
import { KitchenSinkConfigureComponent } from './components/kitchen-sink-configure';
import { AppMaterialModule } from './material.module';

const routes: Routes = [
  { path: '', component: ExamplesComponent },
];

@NgModule({
    bootstrap: [AppComponent],
    imports: [
      BrowserModule,
      FsWizardModule,
      BrowserAnimationsModule,
      AppMaterialModule,
      FormsModule,
      FsLabelModule,
      FsExampleModule.forRoot(),
      FsMessageModule.forRoot(),
      RouterModule.forRoot(routes, {}),
    ],
    declarations: [
        AppComponent,
        ExamplesComponent,
        KitchenSinkComponent,
        KitchenSinkConfigureComponent,
        VerticalComponent,
    ]
})
export class PlaygroundModule {
}
