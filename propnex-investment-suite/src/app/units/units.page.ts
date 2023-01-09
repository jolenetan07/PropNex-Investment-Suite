import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';
import { Place } from '../home/place.model';
import { Unit } from './units.model';

@Component({
  selector: 'app-units',
  templateUrl: './units.page.html',
  styleUrls: ['./units.page.scss'],
})
export class UnitsPage implements OnInit {
  loadedPlaces: Place[];
  result: Place;

  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadedPlaces = this.homeService.allPlaces;
  }

  handleChange(event) {
    const query = event.target.value;
    //console.log(query);
    this.result  = this.homeService.getPlace(query);
    //console.log(this.result);
  }

  onSelectPlace() {
    // this.router.navigate(['/', 'units', 'block-detail']);
    this.router.navigate(['/', 'units', this.result.postal]);
  }
}
