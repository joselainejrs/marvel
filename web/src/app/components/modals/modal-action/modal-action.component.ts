import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-action',
  templateUrl: './modal-action.component.html',
  styleUrls: [
    './modal-action.component.scss',
    '../../../../assets/styles/global.scss'
  ]
})
export class ModalActionComponent implements OnInit {
  modalPay: boolean;
  @Output() openClose = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  eventBtnModal(){
    this.openClose.emit();
  }

  openModal(){
    this.modalPay = true;
  }

  closeModal(){
    this.modalPay = false;
    this. eventBtnModal();
    }

}
