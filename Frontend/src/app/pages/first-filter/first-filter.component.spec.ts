import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstFilterComponent } from './first-filter.component';

describe('FirstFilterComponent', () => {
  let component: FirstFilterComponent;
  let fixture: ComponentFixture<FirstFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
