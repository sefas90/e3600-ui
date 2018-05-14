import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConsignmentService } from '../consignment.service';
import { Consignment } from '../consignment';

@Component({
  selector: 'app-create-view',
  templateUrl: './page-view.component.html'
})
export class PageViewComponent implements OnInit {
  private id = this.route.snapshot.params['id'];
  public consignment: Consignment;
  public button: string;
  public fieldArray: Array<any> = [];
  public newAttribute: any = {};
  public bookId: any;
  public bookPrice: any;
  public bookstoreId: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private consignmentService: ConsignmentService) {
    this.consignment = new Consignment (null, null, null, null, null, null, null);
    this.consignment.date = new Date().toLocaleDateString();
  }

  ngOnInit() {
    if (this.id === '0') {
      this.button = 'Crear';
      this.createView();
    } else {
      this.button = 'Guardar';
      this.editView(this.id);
    }
  }

  createView() {
    this.consignment.date = new Date().toISOString().slice(0, 10);
  }

  editView(id) {
    this.consignmentService.getConsignment(id).subscribe(
      result => {
        this.consignment = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  addField() {
    this.newAttribute.bookId = this.bookId;
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
  }

  removeField(index) {
    this.fieldArray.splice(index, 1);
  }

  receiveBookId($event) {
    this.bookId = $event.book.id;
    this.bookPrice = $event.book.price;
    this.newAttribute.price = this.bookPrice;
  }

  receiveBookstoreId($event) {
    this.bookstoreId = $event;
  }

  saveForm(value) {
    delete (value.newPrice);
    delete (value.newQuantity);
    value.bookstoreId = this.bookstoreId.bookstore;
    value.data = this.fieldArray;
    console.log(value);
    if (this.id === '0') {
      this.consignmentService.createConsignment(value).subscribe(
        result => {
          this.router.navigate(['/consignments/list'], {skipLocationChange: true});
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.consignmentService.editConsignment(value, this.id).subscribe(
        result => {
          this.router.navigate(['/consignments/list'], {skipLocationChange: true});
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
