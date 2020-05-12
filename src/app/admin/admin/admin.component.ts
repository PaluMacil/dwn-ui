import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RoutesRecognized } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  tab = 'siteinfo';
  ngUnsubscribe = new Subject<void>();

  constructor(
    public router: Router,
    activatedRoute: ActivatedRoute
  ) {
    this.tab = activatedRoute.snapshot.params.tab;
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        takeUntil(this.ngUnsubscribe),
        filter<RoutesRecognized>((event) => event instanceof RoutesRecognized))
      .subscribe((event) => {
        if (event.state.root.firstChild) {
          this.tab = event.state.root.firstChild.params.tab;
        }
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
