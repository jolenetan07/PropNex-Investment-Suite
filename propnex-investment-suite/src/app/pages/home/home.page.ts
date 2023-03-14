import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  currUser: User;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.currUser = this.authService.currentUser;
  }

}
