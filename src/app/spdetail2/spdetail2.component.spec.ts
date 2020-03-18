import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Spdetail2Component } from './spdetail2.component';

describe('Spdetail2Component', () => {
  let component: Spdetail2Component;
  let fixture: ComponentFixture<Spdetail2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Spdetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Spdetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
