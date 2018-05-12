import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorService } from '../author.service';
import { Author } from '../author';

@Component({
  selector: 'app-create-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss']
})
export class PageViewComponent implements OnInit {
  private id = this.route.snapshot.params['id'];
  public author: Author;
  public button: string;
  authorForm: FormGroup;
  name: FormControl;
  last_name: FormControl;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private authorService: AuthorService) {
    this.author = new Author (null, null, null);
  }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.last_name = new FormControl('', Validators.required);
    this.authorForm = new FormGroup({
      name: this.name,
      last_name: this.last_name
    });
    if (this.id === '0') {
      this.button = 'Crear';
      this.createView();
    } else {
      this.button = 'Guardar';
      this.editView(this.id);
    }
  }

  createView() {

  }

  editView(id) {
    this.authorService.getAuthor(id).subscribe(
      result => {
        this.author = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  saveForm(value) {
    if (this.id === '0') {
      this.authorService.createAuthor(value).subscribe(
        result => {
          this.router.navigate(['/authors/list'], {skipLocationChange: true});
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.authorService.editAuthor(value, this.id).subscribe(
        result => {
          this.router.navigate(['/authors/list'], {skipLocationChange: true});
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
