import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { fbUnit } from 'src/app/auth/firebase.model';
import { PlaceService } from 'src/app/units/place.service';

@Component({
  selector: 'app-floorplan-modal',
  templateUrl: './floorplan-modal.component.html',
  styleUrls: ['./floorplan-modal.component.scss'],
})
export class FloorplanModalComponent implements OnInit {
  currUnit: fbUnit;

  constructor(
    private modalCtrl: ModalController,
    private placeService: PlaceService
  ) { }

  ngOnInit() {
    this.currUnit = this.placeService.currUnit;
  }

  onCancel() {
    console.log("close floor plan");
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
