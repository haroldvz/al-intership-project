import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { TdMediaService } from '@covalent/core';
import { fadeAnimation } from './shared/animations/animations';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]

})
export class AppComponent implements OnInit, OnDestroy {
 

  name = 'Movies';

  menu_routes: Object[] = [
    /*{
      icon: 'home',
      route: '/',
      title: 'Home',
    },*/
    //Movies
    {
      icon: 'library_books',
      route: '/movies/popular',
      title: 'Popular movies',
    }, {
      icon: 'color_lens',
      route: '/movies/now-playing',
      title: 'Playing now movies',
    }, {
      icon: 'view_quilt',
      route: '/movies/upcoming',
      title: 'Upcoming movies',
    }, {
      icon: 'picture_in_picture',
      route: '/movies/top-rated',
      title: 'Top rated movies',
    },
    //TV
    {
      icon: 'library_books',
      route: '/tv/airing-today',
      title: 'Airing today TV series',
    },
    {
      icon: 'library_books',
      route: '/tv/on-the-air',
      title: 'On the Air TV series',
    }, {
      icon: 'color_lens',
      route: '/tv/popular',
      title: 'Popular TV series',
    }, {
      icon: 'view_quilt',
      route: '/tv/top-rated',
      title: 'Top rated TV series',
    },
    //People
    {
      icon: 'library_books',
      route: '/people/popular',
      title: 'Popular people',
    }

  ];

  navbar_routes: Object[] = [
    {
      name: 'Home',
      path: '/home',
      icon: 'whatshot',
    }, {
      name: 'Movies',
      path: '/movies/popular',
      icon: 'local_movies',
    }, {
      name: 'TV Series',
      path: '/tv/popular',
      icon: 'tv',
    }, {
      name: 'People',
      path: '/people/popular',
      icon: 'people',
    }, {
      name: 'About',
      path: '/about',
      icon: 'people',
    }
  ];

  subscription:Subscription;

  /**
   *Creates an instance of AppComponent.
   * @param {TdMediaService} media
   * @param {MatIconRegistry} _iconRegistry
   * @param {DomSanitizer} _domSanitizer
   * @memberof AppComponent
   */
  constructor(public media: TdMediaService,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private router: Router) {
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-ux',
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/teradata-ux.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-mark',
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent-mark.svg'));
      
      this._iconRegistry.addSvgIconInNamespace('assets', 'logo-movie',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/logos/logo_movie_one.svg'));

  }

  ngOnInit() {

    this.subscription= this.router.events.pipe(
      filter(event=> event instanceof NavigationEnd)
    )
    .subscribe(()=>window.scrollTo(0,0));


    /*this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      if (typeof window != 'undefined'){
        //window.scrollTo(0, 0);
        //document.getElementById("app-top").scrollIntoView();
      }
      
      
    });*/
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
   }

  // Theme toggle
  get activeTheme(): string {
    return localStorage.getItem('theme');
  }
  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }
}
