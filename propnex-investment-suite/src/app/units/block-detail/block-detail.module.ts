import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlockDetailPageRoutingModule } from './block-detail-routing.module';

import { BlockDetailPage } from './block-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlockDetailPageRoutingModule
  ],
  declarations: [BlockDetailPage]
})
export class BlockDetailPageModule {}
