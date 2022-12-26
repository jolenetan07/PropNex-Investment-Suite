import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloorDetailPage } from './floor-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FloorDetailPage
  },
  {
    path: 'unit-detail',
    loadChildren: () => import('./unit-detail/unit-detail.module').then( m => m.UnitDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloorDetailPageRoutingModule {}
