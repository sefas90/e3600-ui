import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public books: any;
  constructor(private router: Router,
              private booksService: BooksService) {
  }

  ngOnInit() {
    this.books = this.booksService.loadBooks();
  }

  createBook() {
    this.router.navigate(['/books/page', {id: 0}], {skipLocationChange: true});
  }

  editBook(id) {
    this.router.navigate(['/books/page', {id: id}], {skipLocationChange: true});
  }

  deleteBook(id) {
    console.log(id);
  }
}
