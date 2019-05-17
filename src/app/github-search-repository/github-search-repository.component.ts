import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github-search-repository',
  templateUrl: './github-search-repository.component.html',
  styleUrls: ['./github-search-repository.component.css']
})
export class GithubSearchRepositoryComponent implements OnInit {
  query: any
  repositories$: any

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  repositorySearch (query) {
    return this.http.get(`https://api.github.com/search/repositories?q=${query}`)
  }

  ngOnInit() {
    this.query = this.route.snapshot.params.query;
    this.repositories$ = this.repositorySearch(this.query);
  }

}
