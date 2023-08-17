import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRunComponent } from './single-run.component';

describe('SingleRunComponent', () => {
  let component: SingleRunComponent;
  let fixture: ComponentFixture<SingleRunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleRunComponent]
    });
    fixture = TestBed.createComponent(SingleRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
