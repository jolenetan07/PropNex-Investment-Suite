import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FloorplanModalComponent } from './floorplan-modal.component';

describe('FloorplanModalComponent', () => {
  let component: FloorplanModalComponent;
  let fixture: ComponentFixture<FloorplanModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorplanModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FloorplanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
