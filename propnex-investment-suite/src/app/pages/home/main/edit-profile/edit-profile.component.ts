import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { fbUser } from 'src/app/pages/auth/firebase.model';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})


export class EditProfileComponent implements OnInit {

  currUser: fbUser;
  form: FormGroup;


  constructor(
    private authService: AuthService,
    private modalCtrl: ModalController
  ) { }


  ngOnInit() {
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


  // cancel edit profile
  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }


  // edit profile form
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
