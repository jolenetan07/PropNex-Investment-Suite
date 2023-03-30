import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UnitsPageRoutingModule } from './units-routing.module';
import { UnitsPage } from './units.page';
import { AddBlockComponent } from './add-block/add-block.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UnitsPage, AddBlockComponent]
})


export class UnitsPageModule {}
