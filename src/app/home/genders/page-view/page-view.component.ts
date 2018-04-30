import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { GenderService } from '../gender.service';
import { Gender } from '../gender';

@Component({
  selector: 'app-create-view',
  templateUrl: './page-view.component.html'
})
export class PageViewComponent implements OnInit {

  private id = this.route.snapshot.params['id'];
  public gender: Gender;
  constructor(private route: ActivatedRoute,
              private genderService: GenderService) {
    this.gender = new Gender(null, null);
  }

  ngOnInit() {
    if (this.id === '0') {
      this.createView();
    } else {
      this.editView();
    }
  }

  createView() {

  }

  editView() {
    this.gender = this.genderService.getGender();
  }

  public saveForm(formValid) {
    if (!formValid) {
      return;
    }
  }
}