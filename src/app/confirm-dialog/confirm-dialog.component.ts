import {Component, EventEmitter, OnInit, Output} from '@angular/core';

declare var $: any;

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @Output() buttonResultEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  showModal() {
    $('#myModal').modal('show');
  }

  hideModal(){
    $('#myModal').modal('hide');
  }

  Allow() {
    this.hideModal();
    this.buttonResultEmitter.emit(true);
  }

  Cancel() {
    this.hideModal();
    this.buttonResultEmitter.emit(false);
  }
}
