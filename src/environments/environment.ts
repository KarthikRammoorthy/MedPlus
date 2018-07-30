// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  'getUserbyMailRLU': 'https://medplusapi.herokuapp.com/MedPlus/email/',
  'postReviewbyProductURL': 'https://medplusapi.herokuapp.com/MedPlus/review',
  'getProductbyProductURL': 'https://medplusapi.herokuapp.com/MedPlus/product/2/',
  'InsertUrl': 'https://medplusapi.herokuapp.com/MedPlus/user',
  'LoginUrl': 'http://localhost:8080/MedPlus/login',
  'buyProductURL': 'http://localhost:8080/MedPlus/buynow',
  'loadCartURL': 'http://localhost:8080/MedPlus/checkout',
  'searchProductURL': 'https://medplusapi.herokuapp.com/MedPlus/productsearch',
  'orderhistoryURL': 'https://medplusapi.herokuapp.com/MedPlus/orderhistory',
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
