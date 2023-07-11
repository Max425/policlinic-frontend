import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  @Output() addEvent = new EventEmitter();

  

  constructor() {}

  ngOnInit(): void {
    
  }

  onAdd() {
    this.addEvent.emit();
  }
}
