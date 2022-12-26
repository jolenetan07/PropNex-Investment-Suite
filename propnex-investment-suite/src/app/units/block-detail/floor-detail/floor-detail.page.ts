import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service';
import { Place } from 'src/app/home/place.model';

@Component({
  selector: 'app-floor-detail',
  templateUrl: './floor-detail.page.html',
  styleUrls: ['./floor-detail.page.scss'],
})
export class FloorDetailPage implements OnInit {
  places: Place[];
  floorDetails: string[] = [
    'Floor Range: ',
    'Flat Type: ',
    'Floor area (sqm): ',
    'Resale price ($): '
  ]

  constructor(
    private homeService: HomeService,
    //private router: Router
  ) { }

  ngOnInit() {
    this.places = this.homeService.allPlaces;
  }


  handleChange(event) {
    console.log(event.detail.value);
    //this.router.navigate(['/', 'units', 'block-detail', 'floor-detail', 'unit-detail']);
  }

}
