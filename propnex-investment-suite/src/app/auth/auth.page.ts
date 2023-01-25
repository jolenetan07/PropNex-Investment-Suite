import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { fbUser, fbPostal, fbTrans } from './firebase.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit, OnDestroy {
  isLoading = false;
  isLogin = true;

  loadedFBUsers: fbUser[];
  private fbUsersSub: Subscription;

  loadedFBPostals: fbPostal[];
  private fbPostalsSub: Subscription;

  loadedFBTrans: fbTrans[];
  private fbPTransSub: Subscription;


  constructor(
    private authService: AuthService, 
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.fbUsersSub = this.authService.fbUsers.subscribe(fbUsers => {
      this.loadedFBUsers = fbUsers;
    })

    this.fbPostalsSub = this.authService.fbPostals.subscribe(fbPostals => {
      this.loadedFBPostals = fbPostals;
    })

    this.fbPTransSub = this.authService.fbTrans.subscribe(fbTrans => {
      this.loadedFBTrans = fbTrans;
    })
  }

  ionViewWillEnter() {
    this.authService.fetchFBUsers().subscribe(() => {

    });

    this.authService.fetchFBPostals().subscribe(() => {

    });

    this.authService.fetchFBTrans().subscribe(() => {

    });

  }

  onLogin() {
    this.isLoading = true;
    this.authService.login();
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Authenticating...' })
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('/home/tabs/main');
        }, 1500);
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const username = form.value.username;
    const password = form.value.password;
    const usertype = form.value.usertype;

    const firstname = form.value.firstname;
    const lastname = form.value.lastname;
    const income = form.value.income;

    form.reset();
    console.log(username, password, usertype);
    console.log(firstname, lastname, income);

    if (this.isLogin) {
      // send request to login servers
    } else {
      // send request to signup servers
    }
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  fetchFBUsers() {
    console.log(this.loadedFBUsers);
  }

  fetchFBPostals() {
    console.log(this.loadedFBPostals);
  }

  fetchFBTrans() {
    console.log(this.loadedFBTrans);
  }

  ngOnDestroy() {
    if (this.fbUsersSub) {
      this.fbUsersSub.unsubscribe();
    }
    if (this.fbPostalsSub) {
      this.fbPostalsSub.unsubscribe();
    }
    if (this.fbPTransSub) {
      this.fbPTransSub.unsubscribe();
    }
  }
}
