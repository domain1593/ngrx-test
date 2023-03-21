import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WizardPageRoutingModule } from './wizard-routing.module';

import { WizardPage } from './wizard.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WizardPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WizardPage]
})
export class WizardPageModule {}
