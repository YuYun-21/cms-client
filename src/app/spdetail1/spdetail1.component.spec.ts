import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Spdetail1Component } from './spdetail1.component';

describe('Spdetail1Component', () => {
  let component: Spdetail1Component;
  let fixture: ComponentFixture<Spdetail1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Spdetail1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Spdetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
