import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedUpdateComponent } from './mixed-update.component';

describe('MixedUpdateComponent', () => {
  let component: MixedUpdateComponent;
  let fixture: ComponentFixture<MixedUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixedUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
