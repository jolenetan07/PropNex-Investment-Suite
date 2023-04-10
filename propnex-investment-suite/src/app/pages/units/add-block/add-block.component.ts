import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { PlaceService } from '../../../services/place.service';

@Component({
  selector: 'app-add-block',
  templateUrl: './add-block.component.html',
  styleUrls: ['./add-block.component.scss'],
})

export class AddBlockComponent implements OnInit {

  addBlockForm: FormGroup;


  constructor(
    private modalCtrl: ModalController,
    private placeService: PlaceService
  ) { }


  ngOnInit() {
    this.addBlockForm = new FormGroup({
      projectName: new FormControl(null, {
        updateOn: 'blur',
      }), 
      postalCode: new FormControl(null, {
        updateOn: 'blur',
      }),
    });
  }

  // cancel add place
  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  // submit add block form
  submitAddBlock() {
    if (!this.addBlockForm.valid) {
      return;
    }
    const projectName = this.addBlockForm.value.projectName;
    const postalCode = this.addBlockForm.value.postalCode;
    
    this.placeService.addBlock(projectName, postalCode).subscribe(() => {

    });
    this.addBlockForm.reset();
    this.modalCtrl.dismiss();
  }

  // upload place image
  uploadBlockImage() {
    console.log("choose block image to upload")
  }
}
