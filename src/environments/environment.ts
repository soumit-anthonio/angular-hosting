// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hostUrl: "https://localhost:7039/",
  apiUrl: "https://localhost:7039/api/",
  imgUrl: "https://localhost:7039/upload/",
  devTest:"main env",
  loginUrl: "https://liencare.auth.ap-south-1.amazoncognito.com/oauth2/authorize?client_id=5vmrmds1qbn0s3tmkq5j4g76gh&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Flocalhost%3A4200/login",
  logoutUrl: "https://liencare.auth.ap-south-1.amazoncognito.com/logout?client_id=5vmrmds1qbn0s3tmkq5j4g76gh&logout_uri=https://localhost:4200/logout",
  changePassword:'https://liencare.auth.ap-south-1.amazoncognito.com/forgotPassword?client_id=5vmrmds1qbn0s3tmkq5j4g76gh&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Flocalhost%3A4200/login',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
