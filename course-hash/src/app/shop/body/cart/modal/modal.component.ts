import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() showModal!: boolean;

  @Output() showModalChange = new EventEmitter<boolean>()

  closeModal() {
    this.showModal = false;
    this.showModalChange.emit(this.showModal);
  }

}
