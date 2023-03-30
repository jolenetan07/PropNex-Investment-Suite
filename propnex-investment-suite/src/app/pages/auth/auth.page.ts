import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { fbUser } from './firebase.model';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})


export class AuthPage implements OnInit, OnDestroy {
  isLogin = true;

  result: fbUser;

  loadedFBUsers: fbUser[];
  private fbUsersSub: Subscription;


  constructor(
    private authService: AuthService, 
    private router: Router,
    private alertController: AlertController
  ) { }


  ngOnInit() {
    this.fbUsersSub = this.authService.fbUsers.subscribe(fbUsers => {
      this.loadedFBUsers = fbUsers;
    })
  }


  ionViewWillEnter() {
    this.authService.fetchFBUsers().subscribe(() => {

    });
  }


  // submit login / signup form
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;
    const name = form.value.name;

    form.reset();

    if (this.isLogin) {
      // send request to login servers
      this.result = this.loadedFBUsers.find(u => u.email === email);
      
      if (this.result) {
        if (this.result.password === password) {
          this.authService.currFbUser = this.result;
          this.authService.login();
          this.router.navigateByUrl('/home/tabs/main');
        } else {
          // invalid password
          this.presentPasswordAlert();
          
        }
      } else {
        // invalid email
        this.presentEmailAlert();
      }
    } else {
      // send request to signup servers
      this.authService.addUser(email, name, password).subscribe(() => {
      });

      this.isLogin = true;
      this.router.navigateByUrl('/auth');
    }
  }


  // wrong email alert
  async presentEmailAlert() {
    const alert = await this.alertController.create({
      header: 'Authentication Failed',
      message: 'Incorrect email!',
      buttons: ['OK'],
    });

    await alert.present();
  }


  // wrong password alert
  async presentPasswordAlert() {
    const alert = await this.alertController.create({
      header: 'Authentication Failed',
      message: 'Incorrect password!',
      buttons: ['OK'],
    });

    await alert.present();
  }


  // check if login / signup
  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }


  ngOnDestroy() {
    if (this.fbUsersSub) {
      this.fbUsersSub.unsubscribe();
    }
  }
}
