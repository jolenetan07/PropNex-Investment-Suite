import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitDetailPage } from './unit-detail.page';

const routes: Routes = [
  {
    path: '',
    component: UnitDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class UnitDetailPageRoutingModule {}
