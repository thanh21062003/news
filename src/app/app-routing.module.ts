import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router'
import { HomePageComponent } from './pages/client/home-page/home-page.component';
import { PostPageComponent } from './pages/client/post-page/post-page.component';
import { PostDetailComponent } from './pages/client/post-detail/post-detail.component';
import { AboutPageComponent } from './pages/client/about-page/about-page.component';
import { ContactPageComponent } from './pages/client/contact-page/contact-page.component';
import { SigninPageComponent } from './pages/client/signin-page/signin-page.component';
import { SignupPageComponent } from './pages/client/signup-page/signup-page.component';
import { NotFoundPageComponent } from './pages/client/not-found-page/not-found-page.component';
import { ManagementPostComponent } from './pages/admin/management-posts/management-post.component';
import { ClientComponent } from './layouts/client/client.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { DashBoardComponent } from './pages/admin/dash-board/dash-board.component';
import { ManagementpostaddComponent } from './pages/admin/management-posts/managementpostadd/managementpostadd.component';
import { ManagementpostupdateComponent } from './pages/admin/management-posts/managementpostupdate/managementpostupdate.component';
import { ManagementCategoryComponent } from './pages/admin/management-categories/management-category.component';
import { ManagementcommentsComponent } from './pages/admin/management-comments/managementcomments.component';
import { ManagementUserComponent } from './pages/admin/management-users/management-user.component';
import { ManagementcontactsComponent } from './pages/admin/management-contacts/managementcontacts.component';
import { ManagementcategoriesupdateComponent } from './pages/admin/management-categories/managementcategoriesupdate/managementcategoriesupdate.component';
import { ManagementcategoriesaddComponent } from './pages/admin/management-categories/managementcategoriesadd/managementcategoriesadd.component';
import { ManagementAboutsComponent } from './pages/admin/management-abouts/management-abouts.component';
import { ManagementAboutsupdateComponent } from './pages/admin/management-abouts/management-aboutsupdate/management-aboutsupdate.component';
import { ManagementHashtagComponent } from './pages/admin/management-hashtag/management-hashtag.component';
import { ManagementHashtagupdateComponent } from './pages/admin/management-hashtag/management-hashtagupdate/management-hashtagupdate.component';
import { ManagementHashtagaddComponent } from './pages/admin/management-hashtag/management-hashtagadd/management-hashtagadd.component';
import { ManagementAboutsaddComponent } from './pages/admin/management-abouts/management-aboutsadd/management-aboutsadd.component';

export const ClientRoutes: Routes = [
  // router client
  {
    path: '', title: 'trang chủ', component: ClientComponent, children: [
      { path: '', title: 'trang chủ', component: HomePageComponent, },
      { path: 'post', title: 'tin tức', component: PostPageComponent },
      { path: 'post/:id', title: 'chi tiết bài viết', component: PostDetailComponent },
      { path: 'about', title: 'thông tin', component: AboutPageComponent },
      { path: 'contact', title: 'liên hệ', component: ContactPageComponent },
    ]
  },
  // router admin
  {
    path: 'admin', title: 'admin', component: AdminComponent, children: [
      // dashboard
      { path: '', title: 'dashboard', component: DashBoardComponent },
      // posts
      { path: 'posts', title: 'admin-post-add', component: ManagementPostComponent },
      { path: 'posts/add', title: 'admin-post-add', component: ManagementpostaddComponent },
      { path: 'posts/:id/update', title: 'admin-post-update', component: ManagementpostupdateComponent },
      // categories
      { path: 'categories', title: 'admin-categories', component: ManagementCategoryComponent },
      { path: 'categories/add', title: 'admin-categories-add', component: ManagementcategoriesaddComponent },
      { path: 'categories/:id/update', title: 'admin-categories-update', component: ManagementcategoriesupdateComponent },
      // hashtag
      { path: 'tag', title: 'admin-hashtag', component: ManagementHashtagComponent },
      { path: 'tag/add', title: 'admin-hashtag-add', component: ManagementHashtagaddComponent },
      { path: 'tag/:id/update', title: 'admin-hashtag-update', component: ManagementHashtagupdateComponent },
      // comments
      { path: 'comments', title: 'admin-comment', component: ManagementcommentsComponent },
      // contacts
      { path: 'contacts', title: 'admin-contact', component: ManagementcontactsComponent },
      // abouts
      { path: 'abouts', title: 'admin-abouts', component: ManagementAboutsComponent },
      { path: 'abouts/add', title: 'admin-abouts-add', component: ManagementAboutsaddComponent },
      { path: 'abouts/:id/update', title: 'admin-abouts-update', component: ManagementAboutsupdateComponent },
      // accounts
      { path: 'accounts', title: 'admin-account', component: ManagementUserComponent },
    ]
  },
  { path: 'signup', title: 'đăng ký', component: SignupPageComponent },
  { path: 'signin', title: 'đăng nhập', component: SigninPageComponent },
  { path: '**', title: '404-NotFound', component: NotFoundPageComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(ClientRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
