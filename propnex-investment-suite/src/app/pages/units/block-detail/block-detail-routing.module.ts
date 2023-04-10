import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockDetailPage } from './block-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BlockDetailPage
  },
  {
    path: ':unitNumId',
    loadChildren: () => import('./unit-detail/unit-detail.module').then( m => m.UnitDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class BlockDetailPageRoutingModule {}
