import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { fbPostal } from 'src/app/pages/auth/firebase.model';
import { PlaceService } from '../../../../services/place.service';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.scss'],
})
export class AddUnitComponent implements OnInit {

  addUnitForm: FormGroup;
  currPlace: fbPostal;

  constructor(
    private modalCtrl: ModalController,
    private placeService: PlaceService
  ) { }

  ngOnInit() {
    this.currPlace = this.placeService.currPlace;
    this.addUnitForm = new FormGroup({
      unitNumber: new FormControl(null, {
        updateOn: 'blur',
      }), 
      bedrooms: new FormControl(null, {
        updateOn: 'blur',
      }), 
      size: new FormControl(null, {
        updateOn: 'blur',
      }), 
      
      // homeownerRace: new FormControl(null, {
      //   updateOn: 'blur',
      // }), 
      // countryOfCitizenship: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // decorativeStyle: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // extensionRequest: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // price: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // titleDeed: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // houseAge: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // buildingHeight: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // noOfUnitsTotal: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // noOfUnitsPerFloor: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // roomType: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // noOfToilets: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // houseStructure: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // doorFacing: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // roomOrientation: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // cornerUnit: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // groundTopFloor: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // westernSun: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // noisy: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // refurbishedState: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // landscapeFromWindow: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // bombShelter: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // openKitchen: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // gasManagementFee: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // houseTax: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // rentalStatus: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
      // vrLink: new FormControl(null, {
      //   updateOn: 'blur',
      // }),
    });
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  submitAddUnit() {
    if (!this.addUnitForm.valid) {
      return;
    }
    const unitNumber = this.addUnitForm.value.unitNumber;
    const bedrooms = this.addUnitForm.value.bedrooms;
    const size = this.addUnitForm.value.size;
    
    this.placeService.addUnit(this.currPlace.postal, unitNumber, bedrooms, size).subscribe(() => {

    });

    this.addUnitForm.reset();
    this.modalCtrl.dismiss();
  }

  uploadFloorPlanImage() {
    console.log("choose floor plan image to upload")
  }

}
