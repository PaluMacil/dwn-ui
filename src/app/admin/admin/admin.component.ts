import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, filter, map } from 'rxjs/operators';

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
        filter((event) => event instanceof RoutesRecognized),
        map((event) => event as RoutesRecognized),
        takeUntil(this.ngUnsubscribe)
      )
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
