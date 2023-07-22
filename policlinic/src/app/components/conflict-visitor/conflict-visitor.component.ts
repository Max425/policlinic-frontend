import {Component, Input, OnInit} from '@angular/core';
import {IConflict} from "../../models/conflict";
import {IVisitor} from "../../models/visitor";
import {SignalRService} from "../../api/swagger/services/signal-r.service";
import {InteractionsWithDbApiService} from "../../api/swagger/services/interactions-with-db-api.service";

@Component({
  selector: 'app-conflict-visitor',
  templateUrl: './conflict-visitor.component.html',
  styleUrls: ['./conflict-visitor.component.css']
})
export class ConflictVisitorComponent implements OnInit {
  @Input() conflict: IConflict
  originalVisitor: IVisitor;
  create = false
  del = false

  constructor(public signalRService: SignalRService, public dbService: InteractionsWithDbApiService ) {}
  ngOnInit(): void {
    this.originalVisitor = { ...this.conflict.conflictPerson }
  }
  save(): void {
    this.create = !this.create;
    this.originalVisitor = { ...this.conflict.conflictPerson }
  }
  cancel(): void {
    this.create = !this.create;
    this.conflict.conflictPerson = {...this.originalVisitor};
  }

  send(): void {
    this.dbService.interactionsWithDbCreateVisitorPost(this.conflict.conflictPerson).subscribe(
      () => {
        console.log('Visitor created successfully.');
      },
      (error) => {
        console.error('Error creating visitor:', error);
      }
    );
    this.signalRService.sendData(this.conflict);
  }

  delete(): void {
    this.signalRService.sendData(this.conflict);
  }
}
