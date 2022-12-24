import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitsPage } from './units.page';

const routes: Routes = [
  {
    path: '',
    component: UnitsPage
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
export class UnitsPageRoutingModule {}
