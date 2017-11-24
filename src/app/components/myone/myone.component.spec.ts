import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyoneComponent } from './myone.component';

describe('MyoneComponent', () => {
  let component: MyoneComponent;
  let fixture: ComponentFixture<MyoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
