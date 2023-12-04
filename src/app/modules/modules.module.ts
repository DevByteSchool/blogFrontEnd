import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './common/slider/slider.component';
import { MixedUpdateComponent } from './home/mixed-update/mixed-update.component';
import { TopCategoryPostsComponent } from './home/top-category-posts/top-category-posts.component';
import { PostDetailsComponent } from './singlePost/post-details/post-details.component';
import { CommentsComponent } from './singlePost/comments/comments.component';
import { PostSidebarComponent } from './singlePost/post-sidebar/post-sidebar.component';



@NgModule({
  declarations: [SliderComponent, MixedUpdateComponent, TopCategoryPostsComponent, PostDetailsComponent, CommentsComponent, PostSidebarComponent],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
