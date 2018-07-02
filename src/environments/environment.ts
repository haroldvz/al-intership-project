// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: 'https://api.themoviedb.org/3',
  api_key: '235c6475d9cd126de9f124093c798767',
  api_image_url: 'https://image.tmdb.org/t/p/',
  api_video_url: 'https://youtube.com/embed/',
  language: 'en',
  api_image_backdrop_size: 'w1400_and_h450_bestv2',
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
