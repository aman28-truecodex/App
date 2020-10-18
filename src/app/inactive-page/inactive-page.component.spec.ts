import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivePageComponent } from './inactive-page.component';

describe('InactivePageComponent', () => {
  let component: InactivePageComponent;
  let fixture: ComponentFixture<InactivePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactivePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
