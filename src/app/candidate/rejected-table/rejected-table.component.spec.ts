import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedTableComponent } from './rejected-table.component';

describe('RejectedTableComponent', () => {
  let component: RejectedTableComponent;
  let fixture: ComponentFixture<RejectedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
