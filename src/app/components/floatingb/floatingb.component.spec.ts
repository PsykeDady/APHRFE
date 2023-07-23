import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingbComponent } from './floatingb.component';

describe('FloatingbComponent', () => {
  let component: FloatingbComponent;
  let fixture: ComponentFixture<FloatingbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
