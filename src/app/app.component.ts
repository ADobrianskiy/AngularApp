import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title
    ) {

    }

    public ngOnInit(): void {
        this.updatePageTitle();
    }

    /**
     * Subscribes on route change and updates page title
     */
    private updatePageTitle() {
        const defaultTitle = 'My Awesome Page';
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => this.activatedRoute),
                map((route) => {
                    return route.firstChild;
                }),
                filter((route) => route.outlet === 'primary'),
                switchMap((route) => route.data),
            )
            .subscribe((data) => this.titleService.setTitle(data.title || defaultTitle));
    }
}
