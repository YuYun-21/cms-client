import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideolistforindexComponent } from './videolistforindex.component';

describe('VideolistforindexComponent', () => {
  let component: VideolistforindexComponent;
  let fixture: ComponentFixture<VideolistforindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideolistforindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideolistforindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
