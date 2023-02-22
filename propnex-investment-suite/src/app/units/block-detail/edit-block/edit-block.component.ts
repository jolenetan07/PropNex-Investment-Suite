import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { fbPostal } from 'src/app/auth/firebase.model';
import { PlaceService } from '../../place.service';

@Component({
  selector: 'app-edit-block',
  templateUrl: './edit-block.component.html',
  styleUrls: ['./edit-block.component.scss'],
})
export class EditBlockComponent implements OnInit {

  editBlockForm: FormGroup;
  currPlace: fbPostal;

  constructor(
    private modalCtrl: ModalController,
    private placeService: PlaceService
  ) { }

  ngOnInit() {
    this.currPlace = this.placeService.currPlace;
    this.editBlockForm = new FormGroup({
      projectName: new FormControl(this.currPlace.name, {
        updateOn: 'blur',
      }),
    });
  }

  onCancel() {
    console.log("cancel edit block");
    this.modalCtrl.dismiss(null, 'cancel');
  }

  submitEditBlock() {
    if (!this.editBlockForm.valid) {
      return;
    }

    let newName = this.editBlockForm.value.projectName;

    this.placeService.editBlock(this.currPlace.postal, newName).subscribe(()=>{

    });
    
    //console.log("block edited");
    //this.editBlockForm.reset();
    this.modalCtrl.dismiss({ message: 'Changes saved'}, 'confirm');
  }

  uploadBlockImage() {
    console.log("choose block image to upload")
  }

}
