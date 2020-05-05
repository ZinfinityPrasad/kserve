import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallagentsComponent } from './viewallagents.component';

describe('ViewallagentsComponent', () => {
  let component: ViewallagentsComponent;
  let fixture: ComponentFixture<ViewallagentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallagentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
