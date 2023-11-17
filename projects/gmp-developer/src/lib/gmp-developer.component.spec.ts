import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpDeveloperComponent } from './gmp-developer.component';

describe('GmpDeveloperComponent', () => {
  let component: GmpDeveloperComponent;
  let fixture: ComponentFixture<GmpDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
