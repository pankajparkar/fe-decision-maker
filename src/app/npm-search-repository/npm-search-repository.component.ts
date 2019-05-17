import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-npm-search-repository',
  templateUrl: './npm-search-repository.component.html',
  styleUrls: ['./npm-search-repository.component.css']
})
export class NpmSearchRepositoryComponent implements OnInit {
  query: any;
  packages$: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  searchPackages (query) {
    return this.http.get(`https://api.npms.io/v2/search?q=${query}`)
  }

  ngOnInit() {
    this.query = this.route.snapshot.params.query
    this.packages$ = this.searchPackages(this.query)
  }

}
