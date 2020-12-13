import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomponentanmeComponent } from './newcomponentanme.component';

describe('NewcomponentanmeComponent', () => {
  let component: NewcomponentanmeComponent;
  let fixture: ComponentFixture<NewcomponentanmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcomponentanmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcomponentanmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
