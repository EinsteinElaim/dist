export class ProfileInfo {

    //the fields we want to extract from the api response
    constructor(public login: string, public name: string, public location: string, public avatar_url:string, public blog:string, public company:string, public bio:string, public public_repos:string, public public_gists: string){}
}
