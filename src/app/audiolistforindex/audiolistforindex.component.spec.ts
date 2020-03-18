import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiolistforindexComponent } from './audiolistforindex.component';

describe('AudiolistforindexComponent', () => {
  let component: AudiolistforindexComponent;
  let fixture: ComponentFixture<AudiolistforindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiolistforindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiolistforindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
