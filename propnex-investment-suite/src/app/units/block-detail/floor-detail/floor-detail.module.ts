import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloorDetailPageRoutingModule } from './floor-detail-routing.module';

import { FloorDetailPage } from './floor-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloorDetailPageRoutingModule
  ],
  declarations: [FloorDetailPage]
})
export class FloorDetailPageModule {}
