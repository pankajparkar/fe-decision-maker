import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {
  user: any

  constructor(private http: HttpClient) { }

  getUserDetails (){
    this.http.get('https://api.github.com/users/pankajparkar').subscribe(
      user => this.user = user
    )
  }

  ngOnInit() {
  }

}
