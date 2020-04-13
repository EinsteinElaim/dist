import { Component, OnInit } from '@angular/core';
import { ProfileInfo } from './github-info-class/profile-info';
import { UserInfoRequestService } from './user-http/user-info-request.service';
import { MyRepos } from './github-myRepos-listing/my-repos'
import { MyReposRequestService } from './myRepos-http/my-repos-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHubAPI';

  profileInfo: ProfileInfo;
  myRepos: MyRepos;


  constructor(private userInfoReqService:UserInfoRequestService, private myReposRequestService:MyReposRequestService){

  }

  ngOnInit(){
    this.userInfoReqService.profileInfoRequest();
    this.profileInfo = this.userInfoReqService.profileInfo;
    this.myReposRequestService.reposListRequest();
    this.myRepos = this.myReposRequestService.myRepos;
  }
}
