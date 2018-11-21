import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';

import { PlayerRoutingModule } from './player-routing.module';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { DropdownDirective } from '../shared/directives/dropdown.directive';


@NgModule({
  imports: [
    CommonModule,
    PlayerRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    HomeComponent,
    QuizComponent,
    DropdownDirective
  ]
})
export class PlayerModule { }
