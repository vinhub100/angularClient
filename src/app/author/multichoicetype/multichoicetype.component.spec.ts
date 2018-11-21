import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultichoicetypeComponent } from './multichoicetype.component';

describe('MultichoicetypeComponent', () => {
  let component: MultichoicetypeComponent;
  let fixture: ComponentFixture<MultichoicetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultichoicetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultichoicetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
