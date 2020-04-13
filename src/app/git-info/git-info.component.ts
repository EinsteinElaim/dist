import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProfileInfo } from '../github-info-class/profile-info';
//import { Interface } from 'readline';

@Component({
  selector: 'app-git-info',
  templateUrl: './git-info.component.html',
  styleUrls: ['./git-info.component.css']
})
export class GitInfoComponent implements OnInit {

  profileInfo:ProfileInfo;

  constructor(private http:HttpClient) { }

  ngOnInit() {    

  }
  
}
