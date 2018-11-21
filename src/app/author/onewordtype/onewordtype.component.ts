import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-onewordtype',
  templateUrl: './onewordtype.component.html',
  styleUrls: ['./onewordtype.component.css']
})
export class OnewordtypeComponent implements OnInit {

  modalRef: BsModalRef;
  config = {
    animated: true,
    // backdrop: 'static'
  };
  q = {'stmt': '', 'hint': '', 'answer': ''};
  q_index = 0;

  addQ = {'stmt': '', 'hint': '', 'answer': ''};

  questionList = [
    { 'stmt': 'Which was the 1st non Test playing country to beat India in an international match?', 'hint': 'wew', 'answer': 'qw'},
    { 'stmt': 'Track and field star Carl Lewis won how many gold medals at the 1984 Olympic games?', 'hint': 'wew', 'answer': 'qw'},
    { 'stmt': 'Which county did Ravi Shastri play for?', 'hint': 'wewe', 'answer': 'qw'},
    { 'stmt': 'Who was the first Indian to win the World Amateur Billiards title?', 'hint': 'weww', 'answer': 'qw'},
    { 'stmt': 'Who is the first Indian woman to win an Asian Games gold in 400m run?', 'hint': 'wew', 'answer': 'qw'},
    { 'stmt': 'Which two counties did Kapil Dev play?', 'hint': 'wew', 'answer': 'ww'},
    { 'stmt': 'When was Amateur Athletics Federation of India established?', 'hint': 'wew', 'answer': 'wqw'},
    { 'stmt': 'Who did Stone Cold Steve Austin wrestle at the 1998 edition of "Over the Edge"?', 'hint': 'ewe', 'answer': 'wqw'},
    { 'stmt': 'Ricky Ponting is also known as what?', 'hint': 'ewew', 'answer': 'wq'},
    { 'stmt': 'How long are professional Golf Tour players allotted per shot?', 'hint': 'wee', 'answer': 'wq'},
    { 'stmt': 'Which NBA player scored 8 points in the final 7 seconds of a game to lead his team to victory?', 'hint': '', 'answer': 'qq'},
    { 'stmt': 'In the match between India and Pakistan at Jaipur on 02-10-1983, Which new rule was introduced?', 'hint': '', 'answer': 'q'},
    { 'stmt': 'The first hang gliders to be flown were flown in...?', 'hint': 'ew', 'answer': 'wq'},
    { 'stmt': 'Which two counties did Anil Kumble play for?', 'hint': 'ee', 'answer': 'eew'},
    { 'stmt': 'The nickname of Glenn McGrath is what?', 'hint': 'wewe', 'answer': 'wew'},
  ];

   constructor(private modalService: BsModalService) {}

   ngOnInit() {}


  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, this.config );
  // }


  selectQuestion(ind) {
    this.q_index = ind;
    this.q = this.questionList[ind];
  }

  addQuestion() {
    this.questionList.unshift(this.addQ);
    this.addQ = {'stmt': '', 'hint': '', 'answer': ''};
  }

  deleteQuestion(inde) {
    this.questionList.splice(inde, 1);
  }

  updateQuestion() {
    if (this.questionList[this.q_index].stmt === this.q.stmt) {
      this.questionList[this.q_index].hint = this.q.hint;
      this.questionList[this.q_index].answer = this.q.answer;
    }
  }
}
