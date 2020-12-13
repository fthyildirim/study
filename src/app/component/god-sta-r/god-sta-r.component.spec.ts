import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodStaRComponent } from './god-sta-r.component';

describe('GodStaRComponent', () => {
  let component: GodStaRComponent;
  let fixture: ComponentFixture<GodStaRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodStaRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodStaRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
