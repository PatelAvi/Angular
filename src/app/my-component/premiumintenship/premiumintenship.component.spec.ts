import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumintenshipComponent } from './premiumintenship.component';

describe('PremiumintenshipComponent', () => {
  let component: PremiumintenshipComponent;
  let fixture: ComponentFixture<PremiumintenshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumintenshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumintenshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
