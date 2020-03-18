import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselforindexComponent } from './carouselforindex.component';

describe('CarouselforindexComponent', () => {
  let component: CarouselforindexComponent;
  let fixture: ComponentFixture<CarouselforindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselforindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselforindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
