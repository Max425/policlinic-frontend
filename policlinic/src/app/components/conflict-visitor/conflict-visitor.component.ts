import {Component, Input, OnInit} from '@angular/core';
import {IConflict} from "../../models/conflict";
import {InteractionsWithDbApiService} from "../../api/swagger/services/interactions-with-db-api.service";
import {IVisitor} from "../../models/visitor";

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

  constructor(public dbService: InteractionsWithDbApiService) {}
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
}
