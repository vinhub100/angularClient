import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';

import { PlayerRoutingModule } from './player-routing.module';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { SharedModule } from '../shared/shared-module';



@NgModule({
  imports: [
    CommonModule,
    PlayerRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    SharedModule
  ],
  declarations: [
    HomeComponent,
    QuizComponent,
  ]
})
export class PlayerModule { }
