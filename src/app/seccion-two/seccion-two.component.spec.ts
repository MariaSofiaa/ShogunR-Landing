import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionTwoComponent } from './seccion-two.component';

describe('SeccionTwoComponent', () => {
  let component: SeccionTwoComponent;
  let fixture: ComponentFixture<SeccionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
