import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiguysComponent } from './higuys.component';

describe('HiguysComponent', () => {
  let component: HiguysComponent;
  let fixture: ComponentFixture<HiguysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiguysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiguysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
