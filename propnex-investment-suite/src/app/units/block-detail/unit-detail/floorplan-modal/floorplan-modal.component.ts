import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-floorplan-modal',
  templateUrl: './floorplan-modal.component.html',
  styleUrls: ['./floorplan-modal.component.scss'],
})
export class FloorplanModalComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  onCancel() {
    console.log("close floor plan");
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
