import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ProfileInfo } from '../github-info-class/profile-info';

@Injectable({
  providedIn: 'root'
})
export class UserInfoRequestService {

  profileInfo: ProfileInfo;

  constructor(private http:HttpClient) {
    this.profileInfo = new ProfileInfo("","", "","","","","","","");
  }

  profileInfoRequest(){
    interface ApiResponse{
      login: string;
      name: string;
      location: string;
      avatar_url: string;
      blog: string;
      company: string;
      bio: string;
      public_repos: string;
      public_gists: string;
    }

    //using promises to work with responses and errors we get
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.gitApiUrl).toPromise().then(response=>{
        this.profileInfo.login = response.login
        this.profileInfo.name = response.name
        this.profileInfo.location = response.location
        this.profileInfo.avatar_url = response.avatar_url
        this.profileInfo.blog = response.blog
        this.profileInfo.company = response.company
        this.profileInfo.bio = response.bio
        this.profileInfo.public_repos = response.public_repos
        this.profileInfo.public_gists = response.public_gists

        resolve()
      },
      error=>{
        this.profileInfo.name = "Error"
        this.profileInfo.login = "Resource can not be found!"

        reject(error)
      })
    })
    return promise
  }

}
