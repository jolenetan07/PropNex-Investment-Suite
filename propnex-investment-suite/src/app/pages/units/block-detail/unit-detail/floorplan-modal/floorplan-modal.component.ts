import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { fbUnit } from 'src/app/pages/auth/firebase.model';
import { PlaceService } from 'src/app/services/place.service';


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


  // collapse floor plan
  onCancel() {
    console.log("close floor plan");
    this.modalCtrl.dismiss(null, 'cancel');
  }

  
}
