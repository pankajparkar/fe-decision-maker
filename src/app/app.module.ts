import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GithubRepositoryComponent } from './github-repository/github-repository.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { GithubSearchRepositoryComponent } from './github-search-repository/github-search-repository.component';
import { NpmSearchRepositoryComponent } from './npm-search-repository/npm-search-repository.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubRepositoryComponent,
    GithubUserComponent,
    GithubSearchRepositoryComponent,
    NpmSearchRepositoryComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // Material module 
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
