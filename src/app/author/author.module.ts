import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';

import { HomeComponent } from './home/home.component';
import { OnewordtypeComponent } from './onewordtype/onewordtype.component';
import { SinglechoicetypeComponent } from './singlechoicetype/singlechoicetype.component';
import { MultichoicetypeComponent } from './multichoicetype/multichoicetype.component';
import { AuthorRoutingModule } from './author-routing.module';
import { DropdownDirective } from '../shared/directives/dropdown.directive';

@NgModule({
  imports: [
    CommonModule,
    AuthorRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    HomeComponent,
    OnewordtypeComponent,
    SinglechoicetypeComponent,
    MultichoicetypeComponent,
    DropdownDirective
  ]
})
export class AuthorModule { }
