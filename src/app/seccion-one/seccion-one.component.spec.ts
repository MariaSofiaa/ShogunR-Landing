import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionOneComponent } from './seccion-one.component';

describe('SeccionOneComponent', () => {
  let component: SeccionOneComponent;
  let fixture: ComponentFixture<SeccionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
