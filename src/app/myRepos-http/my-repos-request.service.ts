import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MyRepos } from '../github-myRepos-listing/my-repos';

@Injectable({
  providedIn: 'root'
})
export class MyReposRequestService {

  myRepos: MyRepos;

  constructor(private http:HttpClient) {
    this.myRepos = new MyRepos("","","","","");
  }

  reposListRequest(){
    interface ApiResponse{
      id: string;
      name:string;
      description: string;
      forks: string;
      size: string;
    }
    //using promises to work with responses and errors we get
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.repoApiUrl + environment.apiKey).toPromise().then(response=>{
        this.myRepos = response
        this.myRepos.id = response.id
        this.myRepos.name = response.name
        this.myRepos.description = response.description
        this.myRepos.forks = response.forks
        this.myRepos.size = response.size

        resolve()
      },
      error=>{
        this.myRepos.name = "Error"
        this.myRepos.description = "Resource can not be found!"

        reject(error)
      })
    })
    return promise
  }
}
