import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modalRef: BsModalRef;
  config = {
    animated: true,
    // backdrop: 'static'
  };

  name = 'Khiladi';
  score = 1250;

   constructor(private modalService: BsModalService) {}

   ngOnInit() {}


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config );
  }

}
