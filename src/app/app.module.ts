import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { CommonModule } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxCaptchaModule } from 'ngx-captcha';
// auth google
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';
// Importing Ant Design modules
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzFormModule } from 'ng-zorro-antd/form';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
// Importing components modules client
import { ClientComponent } from './layouts/client/client.component';
import { HeaderComponentClient } from './layouts/components/client/header/header.component';
import { FooterComponentClient } from './layouts/components/client/footer/footer.component';
import { HomePageComponent } from './pages/client/home-page/home-page.component';
import { AboutPageComponent } from './pages/client/about-page/about-page.component';
import { ContactPageComponent } from './pages/client/contact-page/contact-page.component';
import { SigninPageComponent } from './pages/client/signin-page/signin-page.component';
import { SignupPageComponent } from './pages/client/signup-page/signup-page.component';
import { PostPageComponent } from './pages/client/post-page/post-page.component';
import { PostDetailComponent } from './pages/client/post-detail/post-detail.component';
import { NotFoundPageComponent } from './pages/client/not-found-page/not-found-page.component';
import { ListpostComponent } from './pages/client/home-page/components/listpost/listpost.component';
import { ListcategoriesComponent } from './pages/client/post-page/components/listcategories/listcategories.component';
import { ListPostDetailComponent } from './pages/client/post-detail/components/list-post-detail/list-post-detail.component';
import { ListaboutComponent } from './pages/client/about-page/components/listabout/listabout.component';
import { ListcommentComponent } from './pages/client/about-page/components/listcomment/listcomment.component';
// Importing components modules admin
import { AdminComponent } from './layouts/admin/admin.component';
import { HeaderComponentAdmin } from './layouts/components/admin/header/header.component';
import { FooterComponentAdmin } from './layouts/components/admin/footer/footer.component';
import { DashBoardComponent } from './pages/admin/dash-board/dash-board.component';
import { ManagementPostComponent } from './pages/admin/management-posts/management-post.component';
import { ManagementCategoryComponent } from './pages/admin/management-categories/management-category.component';
import { ManagementUserComponent } from './pages/admin/management-users/management-user.component';
import { ManagementcommentsComponent } from './pages/admin/management-comments/managementcomments.component';
import { ManagementcontactsComponent } from './pages/admin/management-contacts/managementcontacts.component';
import { ManagementAboutsupdateComponent } from './pages/admin/management-abouts/management-aboutsupdate/management-aboutsupdate.component';
import { ManagementpostaddComponent } from './pages/admin/management-posts/managementpostadd/managementpostadd.component';
import { ManagementpostupdateComponent } from './pages/admin/management-posts/managementpostupdate/managementpostupdate.component';
import { ManagementcategoriesaddComponent } from './pages/admin/management-categories/managementcategoriesadd/managementcategoriesadd.component';
import { ManagementcategoriesupdateComponent } from './pages/admin/management-categories/managementcategoriesupdate/managementcategoriesupdate.component';
import { ManagementAboutsComponent } from './pages/admin/management-abouts/management-abouts.component';
import { ListrelatedPostsComponent } from './pages/client/post-detail/components/listrelated-posts/listrelated-posts.component';
import { ListCommentsComponent } from './pages/client/post-detail/components/list-comments/list-comments.component';
import { CreateCommentComponent } from './pages/client/post-detail/components/create-comment/create-comment.component';
import { ForgotPasswordComponent } from './pages/client/forgot-password/forgot-password.component';
import { ManagementHashtagComponent } from './pages/admin/management-hashtag/management-hashtag.component';
import { ManagementHashtagaddComponent } from './pages/admin/management-hashtag/management-hashtagadd/management-hashtagadd.component';
import { ManagementHashtagupdateComponent } from './pages/admin/management-hashtag/management-hashtagupdate/management-hashtagupdate.component';
import { ManagementAboutsaddComponent } from './pages/admin/management-abouts/management-aboutsadd/management-aboutsadd.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    // Importing components modules client
    ClientComponent,
    HeaderComponentClient,
    FooterComponentClient,
    AppComponent,
    HomePageComponent,
    ListpostComponent,
    AboutPageComponent,
    ContactPageComponent,
    SigninPageComponent,
    SignupPageComponent,
    PostPageComponent,
    PostDetailComponent,
    NotFoundPageComponent,
    ListcategoriesComponent,
    ListPostDetailComponent,
    ListaboutComponent,
    ListcommentComponent,
    // Importing components modules admin
    AdminComponent,
    HeaderComponentAdmin,
    FooterComponentAdmin,
    // dashboard component
    DashBoardComponent,
    // post component
    ManagementPostComponent,
    ManagementpostaddComponent,
    ManagementpostupdateComponent,
    // admin categories
    ManagementCategoryComponent,
    ManagementcategoriesaddComponent,
    ManagementcategoriesupdateComponent,
    // admin User
    ManagementUserComponent,
    // admin comments
    ManagementcommentsComponent,
    // admin categories
    ManagementcontactsComponent,
    // admin Abouts
    ManagementAboutsComponent,
    ManagementAboutsupdateComponent,
    ListrelatedPostsComponent,
    ListCommentsComponent,
    CreateCommentComponent,
    ForgotPasswordComponent,
    ManagementHashtagComponent,
    ManagementHashtagaddComponent,
    ManagementHashtagupdateComponent,
    ManagementAboutsaddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    NgxCaptchaModule,
    SocialLoginModule,
    // Importing Ant Design modules
    NzButtonModule,
    NzTableModule,
    NzFormModule,
    NzMenuModule,
    NzIconModule,
    NzLayoutModule,
    NzListModule,
    NzBackTopModule,
    NzPopconfirmModule,
    NzMessageModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzImageModule,
    NzInputModule,
    NzUploadModule,
    NzSelectModule,
    NzModalModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '386466001734-6aonbo04610j2dpkn0522dh06oqivak8.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
