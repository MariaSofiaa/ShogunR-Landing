import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionThreeComponent } from './seccion-three.component';

describe('SeccionThreeComponent', () => {
  let component: SeccionThreeComponent;
  let fixture: ComponentFixture<SeccionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
