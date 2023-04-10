import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'favourites',
        children: [
          {
            path: '',
            loadChildren: () => import('./favourites/favourites.module').then( m => m.FavouritesPageModule)
          },
        ]
      },
      {
        path: 'main',
        children: [
          {
            path: '',
            loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
          }
        ]
      },
      {
        path: 'recommendations',
        children: [
          {
            path: '',
            loadChildren: () => import('./recommendations/recommendations.module').then( m => m.RecommendationsPageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: '/home/tabs/main',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/tabs/main',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomePageRoutingModule {}
