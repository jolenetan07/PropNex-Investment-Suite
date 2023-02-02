import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitDetailPageRoutingModule } from './unit-detail-routing.module';

import { UnitDetailPage } from './unit-detail.page';
import { EditUnitComponent } from './edit-unit/edit-unit.component';
import { FloorplanComponent } from './floorplan/floorplan.component';
import { FloorplanModalComponent } from './floorplan-modal/floorplan-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitDetailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UnitDetailPage, EditUnitComponent, FloorplanComponent, FloorplanModalComponent]
})
export class UnitDetailPageModule {}
