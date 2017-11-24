import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayDataComponent } from './twoway-data.component';

describe('TwowayDataComponent', () => {
  let component: TwowayDataComponent;
  let fixture: ComponentFixture<TwowayDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowayDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
