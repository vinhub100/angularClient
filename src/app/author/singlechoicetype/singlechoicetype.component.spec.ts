import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglechoicetypeComponent } from './singlechoicetype.component';

describe('SinglechoicetypeComponent', () => {
  let component: SinglechoicetypeComponent;
  let fixture: ComponentFixture<SinglechoicetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglechoicetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglechoicetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
