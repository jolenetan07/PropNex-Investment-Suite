import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitsPage } from './units.page';

const routes: Routes = [
  {
    path: '',
    component: UnitsPage,
  },
  {
    path: 'block-detail',
    loadChildren: () => import('./block-detail/block-detail.module').then( m => m.BlockDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitsPageRoutingModule {}
