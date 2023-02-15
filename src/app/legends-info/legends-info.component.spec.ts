import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendsInfoComponent } from './legends-info.component';

describe('LegendsInfoComponent', () => {
  let component: LegendsInfoComponent;
  let fixture: ComponentFixture<LegendsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegendsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
