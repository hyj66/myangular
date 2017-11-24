import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomattributeComponent } from './domattribute.component';

describe('DomattributeComponent', () => {
  let component: DomattributeComponent;
  let fixture: ComponentFixture<DomattributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomattributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomattributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
