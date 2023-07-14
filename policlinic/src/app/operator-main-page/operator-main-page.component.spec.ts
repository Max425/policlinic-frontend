import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorMainPageComponent } from './operator-main-page.component';

describe('OperatorMainPageComponent', () => {
  let component: OperatorMainPageComponent;
  let fixture: ComponentFixture<OperatorMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperatorMainPageComponent]
    });
    fixture = TestBed.createComponent(OperatorMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
