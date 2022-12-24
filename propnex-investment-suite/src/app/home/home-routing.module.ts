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
          // {
          //   path: ':placeId',
          //   loadChildren: () => import('./discover/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)
          // }
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
          // {
          //   path: 'new',
          //   loadChildren: () => import('./offers/new-offer/new-offer.module').then(m => m.NewOfferPageModule)
          // },
          // {
          //   path: 'edit/:placeId',
          //   loadChildren: () => import('./offers/edit-offer/edit-offer.module').then(m => m.EditOfferPageModule)
          // },
          // {
          //   path: ':placeId',
          //   loadChildren: () => import('./offers/offer-bookings/offer-bookings.module').then(m => m.OfferBookingsPageModule)
          // }
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
