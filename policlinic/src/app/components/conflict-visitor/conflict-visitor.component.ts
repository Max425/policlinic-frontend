import {Component, Input, OnInit} from '@angular/core';
import {IVisitor} from "../../models/visitor";
import { records as data } from '../../data/records'
import {IRecord} from "../../models/record";

@Component({
  selector: 'app-conflict-visitor',
  templateUrl: './conflict-visitor.component.html',
  styleUrls: ['./conflict-visitor.component.css']
})
export class ConflictVisitorComponent implements OnInit {
  @Input() visitor: IVisitor
  create = false
  redactor = false
  del = false

  // constructor(public dbService: InteractionsWithDbApiService) {}
  ngOnInit(): void { // запрос делать если details = true а не при инициализации
    // this.dbService.interactionsWithDbGetRecordGet$Response().subscribe(() => {
    //   this.loading = false
    // })
  }
  save(): void {

  }
}
