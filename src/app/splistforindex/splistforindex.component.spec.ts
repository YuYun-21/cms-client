import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplistforindexComponent } from './splistforindex.component';

describe('SplistforindexComponent', () => {
  let component: SplistforindexComponent;
  let fixture: ComponentFixture<SplistforindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplistforindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplistforindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
