import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpPageComponent } from './op-page.component';

describe('OpPageComponent', () => {
  let component: OpPageComponent;
  let fixture: ComponentFixture<OpPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpPageComponent]
    });
    fixture = TestBed.createComponent(OpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
