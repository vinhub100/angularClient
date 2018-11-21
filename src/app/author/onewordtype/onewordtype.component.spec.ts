import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewordtypeComponent } from './onewordtype.component';

describe('OnewordtypeComponent', () => {
  let component: OnewordtypeComponent;
  let fixture: ComponentFixture<OnewordtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnewordtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnewordtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
