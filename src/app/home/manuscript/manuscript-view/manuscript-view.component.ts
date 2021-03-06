import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './manuscript-view.component.html'
})
export class ManuscriptViewComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['/manuscripts/list'], {skipLocationChange: true});
  }
}
