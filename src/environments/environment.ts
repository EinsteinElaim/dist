// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //endpoint for displaying my profile info
  gitApiUrl:"https://api.github.com/users/EinsteinElaim",
  //endpoint for listing all repos in my profile
  repoApiUrl:"https://api.github.com/users/EinsteinElaim/repos?access_token=",
  username: "EinsteinElaim",
  apiKey:"43b05c67002de5db3b9a9e8f5c2768f778572f9a"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
