import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytwoComponent } from './mytwo.component';

describe('MytwoComponent', () => {
  let component: MytwoComponent;
  let fixture: ComponentFixture<MytwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
