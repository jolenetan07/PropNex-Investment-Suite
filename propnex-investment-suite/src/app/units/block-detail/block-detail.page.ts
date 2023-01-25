import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HomeService } from 'src/app/home/home.service';
import { Place } from 'src/app/home/place.model';
import { Unit } from '../units.model';

@Component({
  selector: 'app-block-detail',
  templateUrl: './block-detail.page.html',
  styleUrls: ['./block-detail.page.scss'],
})
export class BlockDetailPage implements OnInit {
  isLoading = false;
  place: Place;
  places: Place[];
  units: Unit[];
  result: Unit;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('postalId')) {
        this.navCtrl.navigateBack('/units');
        return;
      }
      this.isLoading = true;
      //this.place = this.homeService.getPlace(paramMap.get('postalId'));
      this.place = this.homeService.allPlaces.find((p) => p.postal === paramMap.get("postalId"));
      this.isLoading = false;
      
    });

    this.places = this.homeService.allPlaces;
    this.units = this.homeService.getBlockUnits();
  }



  handleChange(event) {
    const query = event.target.value;
    //console.log(query);
    //this.units = this.homeService.getBlockUnits(query);
    this.result  = this.homeService.searchUnit('470142',query);
    //console.log(this.result);
  }

  onSelectUnit() {
    // to change
    this.router.navigate(['/', 'units', 'block-detail', 'unit-detail']);
  }

}
