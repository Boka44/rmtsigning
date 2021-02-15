import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdChecklistComponent } from './id-checklist.component';

describe('IdChecklistComponent', () => {
  let component: IdChecklistComponent;
  let fixture: ComponentFixture<IdChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
