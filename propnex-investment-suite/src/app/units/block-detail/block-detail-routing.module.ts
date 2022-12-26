import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlockDetailPage } from './block-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BlockDetailPage
  },
  {
    path: 'floor-detail',
    loadChildren: () => import('./floor-detail/floor-detail.module').then( m => m.FloorDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlockDetailPageRoutingModule {}
