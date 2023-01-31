import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-unit',
  templateUrl: './edit-unit.component.html',
  styleUrls: ['./edit-unit.component.scss'],
})
export class EditUnitComponent implements OnInit {

  editUnitForm: FormGroup;

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.editUnitForm = new FormGroup({
      homeownerRace: new FormControl(null, {
        updateOn: 'blur',
      }), 
      countryOfCitizenship: new FormControl(null, {
        updateOn: 'blur',
      }),
      decorativeStyle: new FormControl(null, {
        updateOn: 'blur',
      }),
      extensionRequest: new FormControl(null, {
        updateOn: 'blur',
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
      }),
      titleDeed: new FormControl(null, {
        updateOn: 'blur',
      }),
      houseAge: new FormControl(null, {
        updateOn: 'blur',
      }),
      buildingHeight: new FormControl(null, {
        updateOn: 'blur',
      }),
      noOfUnitsTotal: new FormControl(null, {
        updateOn: 'blur',
      }),
      noOfUnitsPerFloor: new FormControl(null, {
        updateOn: 'blur',
      }),
      roomType: new FormControl(null, {
        updateOn: 'blur',
      }),
      area: new FormControl(null, {
        updateOn: 'blur',
      }),
      noOfRooms: new FormControl(null, {
        updateOn: 'blur',
      }),
      noOfToilets: new FormControl(null, {
        updateOn: 'blur',
      }),
      houseStructure: new FormControl(null, {
        updateOn: 'blur',
      }),
      doorFacing: new FormControl(null, {
        updateOn: 'blur',
      }),
      roomOrientation: new FormControl(null, {
        updateOn: 'blur',
      }),
      cornerUnit: new FormControl(null, {
        updateOn: 'blur',
      }),
      groundTopFloor: new FormControl(null, {
        updateOn: 'blur',
      }),
      westernSun: new FormControl(null, {
        updateOn: 'blur',
      }),
      noisy: new FormControl(null, {
        updateOn: 'blur',
      }),
      refurbishedState: new FormControl(null, {
        updateOn: 'blur',
      }),
      landscapeFromWindow: new FormControl(null, {
        updateOn: 'blur',
      }),
      bombShelter: new FormControl(null, {
        updateOn: 'blur',
      }),
      openKitchen: new FormControl(null, {
        updateOn: 'blur',
      }),
      gasManagementFee: new FormControl(null, {
        updateOn: 'blur',
      }),
      houseTax: new FormControl(null, {
        updateOn: 'blur',
      }),
      rentalStatus: new FormControl(null, {
        updateOn: 'blur',
      }),
      vrLink: new FormControl(null, {
        updateOn: 'blur',
      }),
    });
  }

  onCancel() {
    console.log("cancel edit unit");
    this.modalCtrl.dismiss(null, 'cancel');
  }

  submitEditUnit() {
    if (!this.editUnitForm.valid) {
      return;
    }
    console.log("unit edited");
    this.editUnitForm.reset();
    this.modalCtrl.dismiss();
  }

  uploadFloorPlanImage() {
    console.log("choose floor plan image to upload")
  }


}
