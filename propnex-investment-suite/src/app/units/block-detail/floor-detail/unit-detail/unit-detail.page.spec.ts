import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnitDetailPage } from './unit-detail.page';

describe('UnitDetailPage', () => {
  let component: UnitDetailPage;
  let fixture: ComponentFixture<UnitDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnitDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
