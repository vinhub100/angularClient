import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';

import { HomeComponent } from './home/home.component';
import { OnewordtypeComponent } from './onewordtype/onewordtype.component';
import { SinglechoicetypeComponent } from './singlechoicetype/singlechoicetype.component';
import { MultichoicetypeComponent } from './multichoicetype/multichoicetype.component';
import { AuthorRoutingModule } from './author-routing.module';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  imports: [
    CommonModule,
    AuthorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    SharedModule
  ],
  declarations: [
    HomeComponent,
    OnewordtypeComponent,
    SinglechoicetypeComponent,
    MultichoicetypeComponent,
  ]
})
export class AuthorModule { }
