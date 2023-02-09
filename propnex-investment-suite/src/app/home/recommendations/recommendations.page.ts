import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Place } from '../place.model';
import { SegmentChangeEventDetail } from '@ionic/core';
import { IonItemSliding } from '@ionic/angular';
import { fbPostal, fbUser } from 'src/app/auth/firebase.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.page.html',
  styleUrls: ['./recommendations.page.scss'],
})
export class RecommendationsPage implements OnInit {
  currUser: fbUser;
  //loadedPlaces?: Place[];
  //displayedPlaces?: Place[];
  loadedPlaces?: fbPostal[];
  displayedPlaces?: fbPostal[];
  //result;

  constructor(
    private homeService: HomeService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.loadedPlaces = this.authService.currFbUser.personalRec;
    this.displayedPlaces = this.loadedPlaces;
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    if (event.detail.value === 'personal') {
      this.displayedPlaces = this.authService.currFbUser.personalRec;
    } else {
      this.displayedPlaces = this.authService.currFbUser.generalRec;
    }
  }

  onAddPlace(postal: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    this.homeService.addFavPlace(postal);
  }

}
