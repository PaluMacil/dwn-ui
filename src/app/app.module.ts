import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // https://ng-bootstrap.github.io
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // https://github.com/FortAwesome/angular-fontawesome
import { MarkdownModule } from 'ngx-markdown';

import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { TokenInterceptor } from './token.interceptor';
import { UserModule } from './user/user.module';
import { NavModule } from './nav/nav.module';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SharedModule } from '@dwn/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    RoutingModule,
    UserModule,
    NavModule,
    SharedModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
