import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrollComponent } from './croll.component';

describe('CrollComponent', () => {
  let component: CrollComponent;
  let fixture: ComponentFixture<CrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
