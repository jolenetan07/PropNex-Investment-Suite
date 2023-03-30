import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { fbUnit } from 'src/app/pages/auth/firebase.model';
import { PlaceService } from 'src/app/services/place.service';
import { FloorplanModalComponent } from '../floorplan-modal/floorplan-modal.component';

@Component({
  selector: 'app-floorplan',
  templateUrl: './floorplan.component.html',
  styleUrls: ['./floorplan.component.scss'],
})
export class FloorplanComponent implements OnInit {
  currUnit: fbUnit;

  constructor(
    private modalCtrl: ModalController,
    private placeService: PlaceService
  ) { }

  ngOnInit() {
    this.currUnit = this.placeService.currUnit;
  }

  onExpand() {
    this.modalCtrl
    .create({ component: FloorplanModalComponent })
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    });
  }

}
