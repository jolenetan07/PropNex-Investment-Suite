import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { fbUser } from 'src/app/auth/firebase.model';
import { User } from 'src/app/auth/user.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  //currUser: User;
  currUser: fbUser;
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    // this.currUser = this.authService.currentUser;
    this.currUser = this.authService.currFbUser;
    this.form = new FormGroup({
      email: new FormControl(this.currUser.email, {
        updateOn: 'blur',
      }), 
      password: new FormControl(this.currUser.password, {
        updateOn: 'blur',
        validators: [ Validators.minLength(6)]
      }),
      name: new FormControl(this.currUser.name, {
        updateOn: 'blur',
      })
    });
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onEditProfile() {
    if (!this.form.valid) {
      return;
    }

    let newPassword = this.form.value.password
    let newName = this.form.value.name

    this.authService.editUser(this.currUser.email, newName, newPassword).subscribe(()=>{

    });
    

    this.modalCtrl.dismiss({ message: 'Changes saved'}, 'confirm');
  }
}
