import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubUserComponent } from './github-user/github-user.component';
import { GithubRepositoryComponent } from './github-repository/github-repository.component';
import { GithubSearchRepositoryComponent } from './github-search-repository/github-search-repository.component';

const routes: Routes = [
  {path: 'user', component: GithubUserComponent},
  {path: 'repos', component: GithubRepositoryComponent},
  {path: 'search/:query', component: GithubSearchRepositoryComponent},
  {path: '**', redirectTo: 'user'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
