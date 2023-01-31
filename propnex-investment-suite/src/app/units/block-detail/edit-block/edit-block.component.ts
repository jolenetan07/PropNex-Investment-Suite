import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-block',
  templateUrl: './edit-block.component.html',
  styleUrls: ['./edit-block.component.scss'],
})
export class EditBlockComponent implements OnInit {

  editBlockForm: FormGroup;

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.editBlockForm = new FormGroup({
      projectName: new FormControl(null, {
        updateOn: 'blur',
      }), 
      postalCode: new FormControl(null, {
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
    console.log("block edited");
    this.editBlockForm.reset();
    this.modalCtrl.dismiss();
  }

  uploadBlockImage() {
    console.log("choose block image to upload")
  }

}
