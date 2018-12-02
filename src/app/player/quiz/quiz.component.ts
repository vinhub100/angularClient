import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor() { }

  rnd = '';
  qmodel = {};
  ow_qmodel = {
    type: 'OW',
    question: 'How are you from One Word?',
    hint: 'Its magic... know that',
    answer: ''
  };

  sc_qmodel = {
    type: 'SC',
    question: 'How are you from Single Chioce?',
    options: ['Fine', 'Awesome', 'Legendery', 'Great'],
    answer: ''
  };

  mc_qmodel = {
    type: 'MC',
    question: 'How are you from Multi Choice?',
    options: ['Fine', 'Awesome', 'Legendery', 'Great'],
    answers: ['']
  };

  // @ViewChild('viewAnswerMessage') viewAnswerMessage: any;

  myArray = ['OW', 'SC', 'MC'];

  ngOnInit() {
    this.qmodel = this.mc_qmodel;
  }

  changetype() {
    this.rnd = this.myArray[Math.floor(Math.random() * this.myArray.length)];
    if (this.rnd === 'OW') {
      this.qmodel = this.ow_qmodel;
    } else if (this.rnd === 'SC') {
      this.qmodel = this.sc_qmodel;
    } else {
      this.qmodel = this.mc_qmodel;
    }
  }
  // openModel() {
  //   this.viewAnswerMessage.nativeElement.className = 'modal fade show';
  // }
  // closeModel() {
  //    this.viewAnswerMessage.nativeElement.className = 'modal hide';
  // }

}
