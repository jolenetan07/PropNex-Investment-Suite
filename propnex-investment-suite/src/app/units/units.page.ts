import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { HomeService } from '../home/home.service';
import { Place } from '../home/place.model';
import { AddBlockComponent } from './add-block/add-block.component';
import { Unit } from './units.model';

@Component({
  selector: 'app-units',
  templateUrl: './units.page.html',
  styleUrls: ['./units.page.scss'],
})
export class UnitsPage implements OnInit {
  currUser: User;
  loadedPlaces: Place[];
  result: Place;

  constructor(
    private authService: AuthService,
    private homeService: HomeService,
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.currUser = this.authService.currentUser;
    this.loadedPlaces = this.homeService.allPlaces;
  }

  handleChange(event) {
    const query = event.target.value;
    //console.log(query);
    this.result  = this.homeService.getPlace(query);
    //console.log(this.result);
  }

  onSelectPlace() {
    // this.router.navigate(['/', 'units', 'block-detail']);
    this.router.navigate(['/', 'units', this.result.postal]);
  }

  onAddBlock() {
    console.log("add new block");
    this.modalCtrl
      .create({ component: AddBlockComponent })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      });
  }
}
