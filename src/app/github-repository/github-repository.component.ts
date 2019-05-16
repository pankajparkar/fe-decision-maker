import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github-repository',
  templateUrl: './github-repository.component.html',
  styleUrls: ['./github-repository.component.css']
})
export class GithubRepositoryComponent implements OnInit {
  repos$;

  constructor(private http: HttpClient) { }

  userRepositories () {
    this.repos$ = this.http.get('https://api.github.com/users/pankajparkar/repos')
  }

  ngOnInit() {
    this.userRepositories();
  }

}
