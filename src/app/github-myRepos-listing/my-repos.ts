export class MyRepos {

    //the fields we want to extract from the api response
    constructor(public id: string, public name: string, public description: string,
         public forks: string, public size: string){}

}
