import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSeriesComponent } from './rxjs-series.component';

describe('RxjsSeriesComponent', () => {
  let component: RxjsSeriesComponent;
  let fixture: ComponentFixture<RxjsSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
