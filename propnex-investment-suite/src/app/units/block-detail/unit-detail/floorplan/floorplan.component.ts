import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FloorplanModalComponent } from '../floorplan-modal/floorplan-modal.component';

@Component({
  selector: 'app-floorplan',
  templateUrl: './floorplan.component.html',
  styleUrls: ['./floorplan.component.scss'],
})
export class FloorplanComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  onExpand() {
    this.modalCtrl
    .create({ component: FloorplanModalComponent })
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    });
  }

}
