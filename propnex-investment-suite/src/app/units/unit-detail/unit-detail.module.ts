import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitDetailPageRoutingModule } from './unit-detail-routing.module';

import { UnitDetailPage } from './unit-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitDetailPageRoutingModule
  ],
  declarations: [UnitDetailPage]
})
export class UnitDetailPageModule {}
