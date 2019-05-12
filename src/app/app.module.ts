import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubRepositoryComponent } from './github-repository/github-repository.component';
import { GithubUserComponent } from './github-user/github-user.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubRepositoryComponent,
    GithubUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
