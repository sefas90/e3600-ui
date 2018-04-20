import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ReadersRoutingModule } from './readers-routing.module';

import { ListViewComponent } from './list-view/list-view.component';
import { ReadersViewComponent } from './readers-view/readers-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ReadersRoutingModule
  ],
  declarations: [
    ListViewComponent,
    ReadersViewComponent
  ],
  providers: [],
  exports: []
})

export class ReadersModule { }