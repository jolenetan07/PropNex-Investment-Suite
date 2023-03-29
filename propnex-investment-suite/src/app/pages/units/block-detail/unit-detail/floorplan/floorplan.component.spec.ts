import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FloorplanComponent } from './floorplan.component';

describe('FloorplanComponent', () => {
  let component: FloorplanComponent;
  let fixture: ComponentFixture<FloorplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorplanComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FloorplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
