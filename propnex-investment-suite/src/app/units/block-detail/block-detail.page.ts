import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';
import { Place } from 'src/app/home/place.model';
import { Unit } from '../units.model';
import { UnitsService } from '../units.service';

@Component({
  selector: 'app-block-detail',
  templateUrl: './block-detail.page.html',
  styleUrls: ['./block-detail.page.scss'],
})
export class BlockDetailPage implements OnInit {
  places: Place[];
  units: Unit[];
  result;

  constructor(
    private homeService: HomeService,
    private unitService: UnitsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.places = this.homeService.allPlaces;
    this.units = this.unitService.allUnits;
  }


  handleChange(event) {
    const query = event.target.value;
    console.log(query);
    this.result  = this.unitService.searchUnit(query);
  }

  onSelectUnit() {
    this.router.navigate(['/', 'units', 'block-detail', 'unit-detail']);
  }

}
