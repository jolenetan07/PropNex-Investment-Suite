import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  currUser: User;
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.currUser = this.authService.currentUser;
    this.form = new FormGroup({
      username: new FormControl(this.currUser.username, {
        updateOn: 'blur',
      }), 
      password: new FormControl(null, {
        updateOn: 'blur',
        validators: [ Validators.minLength(6)]
      }),
      firstname: new FormControl(this.currUser.firstname, {
        updateOn: 'blur',
      }),
      lastname: new FormControl(this.currUser.lastname, {
        updateOn: 'blur',
      }),
      incomerange: new FormControl(null, {
        updateOn: 'blur',
      })
    });
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onEditProfile() {
    this.modalCtrl.dismiss({ message: 'Changes saved'}, 'confirm');

  }

}
