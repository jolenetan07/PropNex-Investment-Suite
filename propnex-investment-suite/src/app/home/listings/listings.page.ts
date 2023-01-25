import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.scss'],
})
export class ListingsPage implements OnInit {
  currUser: User;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.currUser = this.authService.currentUser;
  }

  onEditPlace(slidingEl: IonItemSliding) {
    slidingEl.close();
  }

}
