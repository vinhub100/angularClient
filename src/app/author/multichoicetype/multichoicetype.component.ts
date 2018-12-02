import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-multichoicetype',
  templateUrl: './multichoicetype.component.html',
  styleUrls: ['./multichoicetype.component.css']
})
export class MultichoicetypeComponent implements OnInit {


  modalRef: BsModalRef;
  config = {
    animated: true,
    // backdrop: 'static'
  };
  qIndex = 0;
  q = {'question': '', 'options': [''], 'answer': ['']};
  qmodel = {'question': '', 'options': [{'option': ''}], 'answer': ''};

  questionList = [
    { 'question': 'Which animal do you like?',
    'options': ['cat', 'goat', 'camel'],
     'answer': ['goat'] },
    { 'question': 'Which was the 1st non Test playing country to beat India in an international match?',
     'options': ['wew'],
      'answer': ['qw']
    },
    { 'question': 'Track and field star Carl Lewis won how many gold medals at the 1984 Olympic games?',
    'options': ['wew'],
      'answer': ['qw']
    },
    { 'question': 'Which county did Ravi Shastri play for?',
    'options': ['wew'],
      'answer': ['qw']
    },
    { 'question': 'Who was the first Indian to win the World Amateur Billiards title?',
    'options': ['wew'],
     'answer': ['qw']
    },
    { 'question': 'Who is the first Indian woman to win an Asian Games gold in 400m run?',
    'options': ['wew'],
      'answer': ['qw']
    },
    { 'question': 'Which two counties did Kapil Dev play?',
    'options': ['wew'],
      'answer': ['ww']
    },
    { 'question': 'When was Amateur Athletics Federation of India established?',
    'options': ['wew'],
      'answer': ['wqw']
    },
    { 'question': 'Who did Stone Cold Steve Austin wrestle at the 1998 edition of "Over the Edge"?',
    'options': ['wew'],
      'answer': ['wqw']
    },
    { 'question': 'Ricky Ponting is also known as what?',
    'options': ['wew'],
      'answer': ['wq']
    },
    { 'question': 'How long are professional Golf Tour players allotted per shot?',
    'options': ['wew'],
      'answer': ['wq']
    },
    { 'question': 'Which NBA player scored 8 points in the final 7 seconds of a game to lead his team to victory?',
    'options': ['wew'],
     'answer': ['qq']
    },
    { 'question': 'In the match between India and Pakistan at Jaipur on 02-10-1983, Which new rule was introduced?',
    'options': ['wew'],
      'answer': ['q']
    },
    { 'question': 'The first hang gliders to be flown were flown in...?',
    'options': ['wew'],
      'answer': ['wq']
    },
    { 'question': 'Which two counties did Anil Kumble play for?',
    'options': ['wew'],
      'answer': ['eew']
    },
    { 'question': 'The nickname of Glenn McGrath is what?',
    'options': ['wew'],
      'answer': ['wew']
    },
  ];

  createQuestionForm: FormGroup;

   constructor(private modalService: BsModalService, private fb: FormBuilder) {}

   ngOnInit() {
     this.createReactiveQuestion();
   }

   createReactiveQuestion() {
    this.createQuestionForm = this.fb.group({
      question: [''],
      options: this.fb.array([]),
      answer: this.fb.array([])
    });
   }

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, this.config );
  // }

  get options() {
    return this.createQuestionForm.get('options') as FormArray;
  }

  addOption() {
    this.options.push(this.fb.control(''));  }

  get answer() {
      return this.createQuestionForm.get('answer') as FormArray;
    }

  addAnswer() {
      this.answer.push(this.fb.control(''));  }

  deleteOption(indx) {
    this.qmodel.options.splice(indx, 1);
  }


  selectQuestion(ind) {
    this.qIndex = ind;
    this.q = this.questionList[ind];
  }

  addQuestion() {
    this.questionList.unshift(this.createQuestionForm.value);
  }

  deleteQuestion(inde) {
    this.questionList.splice(inde, 1);
  }

  updateQuestion() {
    if (this.questionList[this.qIndex].question === this.q.question) {
      this.questionList[this.qIndex].options = this.q.options;
      this.questionList[this.qIndex].answer = this.q.answer;
    }
  }

  updateDeleteOption(indx) {
    this.q.options.splice(indx, 1);
  }

  updateAddOption() {
    this.q.options.push('');
  }


  deleteUpdateOption(i) {
    this.q.options.splice(i, 1);
  }

}
