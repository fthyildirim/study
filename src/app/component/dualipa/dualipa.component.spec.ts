import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DualipaComponent } from './dualipa.component';

describe('DualipaComponent', () => {
  let component: DualipaComponent;
  let fixture: ComponentFixture<DualipaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DualipaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DualipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
