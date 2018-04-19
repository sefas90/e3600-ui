import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { GendersRoutingModule } from './genders-routing.module';

import { ListViewComponent } from './list-view/list-view.component';
import { GendersViewComponent } from './genders-view/genders-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    GendersRoutingModule
  ],
  declarations: [
    ListViewComponent,
    GendersViewComponent
  ],
  providers: [],
  exports: []
})

export class GendersModule { }
