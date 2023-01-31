import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-block',
  templateUrl: './add-block.component.html',
  styleUrls: ['./add-block.component.scss'],
})
export class AddBlockComponent implements OnInit {

  addBlockForm: FormGroup;

  constructor(
    private modalCtrl: ModalController,
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

  onCancel() {
    console.log("cancel add block");
    this.modalCtrl.dismiss(null, 'cancel');
  }

  submitAddBlock() {
    if (!this.addBlockForm.valid) {
      return;
    }
    console.log("block added");
    this.addBlockForm.reset();
    this.modalCtrl.dismiss();
  }

  uploadImage() {
    console.log("choose block image to upload")
  }

}
