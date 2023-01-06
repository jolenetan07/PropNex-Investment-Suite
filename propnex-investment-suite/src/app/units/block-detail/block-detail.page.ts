import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';
import { Place } from 'src/app/home/place.model';
import { Unit } from '../units.model';

@Component({
  selector: 'app-block-detail',
  templateUrl: './block-detail.page.html',
  styleUrls: ['./block-detail.page.scss'],
})
export class BlockDetailPage implements OnInit {
  places: Place[];
  units: Unit[];
  result: Unit;

  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.places = this.homeService.allPlaces;
    this.units = this.homeService.getBlockUnits();
    
  }


  handleChange(event) {
    const query = event.target.value;
    //console.log(query);
    //this.units = this.homeService.getBlockUnits(query);
    this.result  = this.homeService.searchUnit('470142',query);
  }

  onSelectUnit() {
    this.router.navigate(['/', 'units', 'block-detail', 'unit-detail']);
  }

}
