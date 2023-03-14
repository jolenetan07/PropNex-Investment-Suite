import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { fbUser, fbPostal, fbTrans } from './firebase.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit, OnDestroy {
  isLoading = false;
  isLogin = true;

  result: fbUser;

  loadedFBUsers: fbUser[];
  private fbUsersSub: Subscription;

  // loadedFBPostals: fbPostal[];
  // private fbPostalsSub: Subscription;

  // loadedFBTrans: fbTrans[];
  // private fbPTransSub: Subscription;


  constructor(
    private authService: AuthService, 
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertController: AlertController
    //private http: HttpClient
  ) { }

  ngOnInit() {
    this.fbUsersSub = this.authService.fbUsers.subscribe(fbUsers => {
      this.loadedFBUsers = fbUsers;
    })

    // this.fbPostalsSub = this.authService.fbPostals.subscribe(fbPostals => {
    //   this.loadedFBPostals = fbPostals;
    // })

    // this.fbPTransSub = this.authService.fbTrans.subscribe(fbTrans => {
    //   this.loadedFBTrans = fbTrans;
    // })
  }

  ionViewWillEnter() {
    this.authService.fetchFBUsers().subscribe(() => {

    });

    // this.authService.fetchFBPostals().subscribe(() => {

    // });

    // this.authService.fetchFBTrans().subscribe(() => {

    // });

  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    const name = form.value.name;

    form.reset();
    console.log(email, password);
    console.log(name);

    if (this.isLogin) {
      // send request to login servers
      this.result = this.loadedFBUsers.find(u => u.email === email);
      if (this.result) {
        
        if (this.result.password === password) {
          
          this.authService.currFbUser = this.result;
          console.log(this.authService.currFbUser);
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

  async presentEmailAlert() {
    const alert = await this.alertController.create({
      header: 'Authentication Failed',
      message: 'Incorrect email!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentPasswordAlert() {
    const alert = await this.alertController.create({
      header: 'Authentication Failed',
      message: 'Incorrect password!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  fetchFBUsers() {
    console.log(this.loadedFBUsers);
    //console.log(this.loadedFBUsers[0].email);
  }

  // fetchFBPostals() {
  //   console.log(this.loadedFBPostals);
  // }

  // fetchFBTrans() {
  //   console.log(this.loadedFBTrans);
  // }

  ngOnDestroy() {
    if (this.fbUsersSub) {
      this.fbUsersSub.unsubscribe();
    }
    // if (this.fbPostalsSub) {
    //   this.fbPostalsSub.unsubscribe();
    // }
    // if (this.fbPTransSub) {
    //   this.fbPTransSub.unsubscribe();
    // }
  }
}
