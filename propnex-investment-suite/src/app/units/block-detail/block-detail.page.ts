import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';
import { Place } from 'src/app/home/place.model';

@Component({
  selector: 'app-block-detail',
  templateUrl: './block-detail.page.html',
  styleUrls: ['./block-detail.page.scss'],
})
export class BlockDetailPage implements OnInit {
  places: Place[];

  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.places = this.homeService.allPlaces;
  }


  handleChange(event) {
    console.log(event.detail.value);
    this.router.navigate(['/', 'units', 'block-detail', 'floor-detail']);
  }

}
