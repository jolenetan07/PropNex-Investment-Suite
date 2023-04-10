import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { fbPostal, fbUnit } from 'src/app/pages/auth/firebase.model';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-edit-all-units',
  templateUrl: './edit-all-units.component.html',
  styleUrls: ['./edit-all-units.component.scss'],
})

export class EditAllUnitsComponent implements OnInit {

  editAllUnitForm: FormGroup;
  currPlace: fbPostal;
  currUnit: fbUnit;


  constructor(
    private modalCtrl: ModalController,
    private placeService: PlaceService
  ) { }


  ngOnInit() {
    this.currPlace = this.placeService.currPlace;
    this.currUnit = this.placeService.currUnit;
    this.editAllUnitForm = new FormGroup({
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

  // cancel edit all units with same numbers
  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  // submit all units with same numbers form
  submitEditAllUnit() {
    if (!this.editAllUnitForm.valid) {
      return;
    }

    let newBedrooms = this.editAllUnitForm.value.bedrooms;
    let newSize = this.editAllUnitForm.value.size;

    this.placeService.editAllUnit(this.currPlace.postal, this.currUnit.unitNumber ,newBedrooms, newSize).subscribe(()=>{

    });
    
    this.modalCtrl.dismiss({ message: 'Changes saved'}, 'confirm');
  }

  // upload floorplan image
  uploadFloorPlanImage() {
    console.log("choose floor plan image to upload")
  }


}