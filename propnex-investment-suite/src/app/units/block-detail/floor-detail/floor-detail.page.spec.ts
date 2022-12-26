import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FloorDetailPage } from './floor-detail.page';

describe('FloorDetailPage', () => {
  let component: FloorDetailPage;
  let fixture: ComponentFixture<FloorDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FloorDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
