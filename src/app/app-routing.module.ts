import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubUserComponent } from './github-user/github-user.component';
import { GithubRepositoryComponent } from './github-repository/github-repository.component';
import { GithubSearchRepositoryComponent } from './github-search-repository/github-search-repository.component';
import { NpmSearchRepositoryComponent } from './npm-search-repository/npm-search-repository.component';

const routes: Routes = [
  {path: 'user', component: GithubUserComponent},
  {path: 'repos', component: GithubRepositoryComponent},
  {path: 'search/github/:query', component: GithubSearchRepositoryComponent},
  {path: 'search/npm/:query', component: NpmSearchRepositoryComponent},
  {path: '**', redirectTo: 'user'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
