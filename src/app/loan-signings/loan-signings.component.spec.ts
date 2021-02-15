import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSigningsComponent } from './loan-signings.component';

describe('LoanSigningsComponent', () => {
  let component: LoanSigningsComponent;
  let fixture: ComponentFixture<LoanSigningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanSigningsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanSigningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
