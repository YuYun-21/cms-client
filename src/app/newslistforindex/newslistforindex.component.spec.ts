import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslistforindexComponent } from './newslistforindex.component';

describe('NewslistforindexComponent', () => {
  let component: NewslistforindexComponent;
  let fixture: ComponentFixture<NewslistforindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewslistforindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewslistforindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
