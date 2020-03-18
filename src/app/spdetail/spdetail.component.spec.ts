import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpdetailComponent } from './spdetail.component';

describe('SpdetailComponent', () => {
  let component: SpdetailComponent;
  let fixture: ComponentFixture<SpdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
