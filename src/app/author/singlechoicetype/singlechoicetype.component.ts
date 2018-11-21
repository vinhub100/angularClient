import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-singlechoicetype',
  templateUrl: './singlechoicetype.component.html',
  styleUrls: ['./singlechoicetype.component.css']
})
export class SinglechoicetypeComponent implements OnInit {

  modalRef: BsModalRef;
  config = {
    animated: true,
    // backdrop: 'static'
  };
  qIndex = 0;
  q = {'stmt': '', 'options': [{'option': ''}], 'answer': ''};
  qmodel = {'stmt': 'wwerwe', 'options': [{'option': 'vxc'}], 'answer': 'cvx'};

  questionList = [
    { 'stmt': 'Which was the 1st non Test playing country to beat India in an international match?',
     'options': [{'option': 'wew'}],
      'answer': 'qw'
    },
    { 'stmt': 'Track and field star Carl Lewis won how many gold medals at the 1984 Olympic games?',
    'options': [{'option': 'wew'}],
      'answer': 'qw'
    },
    { 'stmt': 'Which county did Ravi Shastri play for?',
    'options': [{'option': 'wew'}],
      'answer': 'qw'
    },
    { 'stmt': 'Who was the first Indian to win the World Amateur Billiards title?',
    'options': [{'option': 'wew'}],
     'answer': 'qw'
    },
    { 'stmt': 'Who is the first Indian woman to win an Asian Games gold in 400m run?',
    'options': [{'option': 'wew'}],
      'answer': 'qw'
    },
    { 'stmt': 'Which two counties did Kapil Dev play?',
    'options': [{'option': 'wew'}],
      'answer': 'ww'
    },
    { 'stmt': 'When was Amateur Athletics Federation of India established?',
    'options': [{'option': 'wew'}],
      'answer': 'wqw'
    },
    { 'stmt': 'Who did Stone Cold Steve Austin wrestle at the 1998 edition of "Over the Edge"?',
    'options': [{'option': 'wew'}],
      'answer': 'wqw'
    },
    { 'stmt': 'Ricky Ponting is also known as what?',
    'options': [{'option': 'wew'}],
      'answer': 'wq'
    },
    { 'stmt': 'How long are professional Golf Tour players allotted per shot?',
    'options': [{'option': 'wew'}],
      'answer': 'wq'
    },
    { 'stmt': 'Which NBA player scored 8 points in the final 7 seconds of a game to lead his team to victory?',
    'options': [{'option': 'wew'}],
     'answer': 'qq'
    },
    { 'stmt': 'In the match between India and Pakistan at Jaipur on 02-10-1983, Which new rule was introduced?',
    'options': [{'option': 'wew'}],
      'answer': 'q'
    },
    { 'stmt': 'The first hang gliders to be flown were flown in...?',
    'options': [{'option': 'wew'}],
      'answer': 'wq'
    },
    { 'stmt': 'Which two counties did Anil Kumble play for?',
    'options': [{'option': 'wew'}],
      'answer': 'eew'
    },
    { 'stmt': 'The nickname of Glenn McGrath is what?',
    'options': [{'option': 'wew'}],
      'answer': 'wew'
    },
  ];

   constructor(private modalService: BsModalService) {}

   ngOnInit() {}


  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, this.config );
  // }

  addOption() {
    this.qmodel.options.push({'option': ''});
  }

  deleteOption(indx) {
    this.qmodel.options.splice(indx, 1);
  }


  selectQuestion(ind) {
    this.qIndex = ind;
    this.q = this.questionList[ind];
  }

  addQuestion() {
    this.questionList.unshift(this.qmodel);
    this.qmodel = {'stmt': '', 'options': [{'option': ''}], 'answer': ''};
  }

  deleteQuestion(inde) {
    this.questionList.splice(inde, 1);
  }

  updateQuestion() {
  }
}
