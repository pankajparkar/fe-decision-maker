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
    this.user = this.http.get('https://api.github.com/users/pankajparkar');
  }

  ngOnInit() {
    this.getUserDetails();
  }

}
