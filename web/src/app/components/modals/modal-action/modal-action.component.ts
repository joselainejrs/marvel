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
  openCloseModalPay: boolean;
  @Output() openClose = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  eventBtnModal(){
    this.openClose.emit();
  }

  openModal(){
    this.openCloseModalPay = true;
  }

  closeModal(){
    this.openCloseModalPay = false;
    this. eventBtnModal();
    }

}
