import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCategoryPostsComponent } from './top-category-posts.component';

describe('TopCategoryPostsComponent', () => {
  let component: TopCategoryPostsComponent;
  let fixture: ComponentFixture<TopCategoryPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCategoryPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCategoryPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
