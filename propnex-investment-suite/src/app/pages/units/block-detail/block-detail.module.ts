import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BlockDetailPageRoutingModule } from './block-detail-routing.module';
import { BlockDetailPage } from './block-detail.page';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { EditBlockComponent } from './edit-block/edit-block.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlockDetailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BlockDetailPage, AddUnitComponent, EditBlockComponent]
})

export class BlockDetailPageModule {}
