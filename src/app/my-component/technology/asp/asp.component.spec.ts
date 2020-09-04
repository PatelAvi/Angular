import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ASPComponent } from './asp.component';

describe('ASPComponent', () => {
  let component: ASPComponent;
  let fixture: ComponentFixture<ASPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ASPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ASPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
