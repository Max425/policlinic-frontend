import {Component, Input, OnInit} from '@angular/core';
import {IVisitor} from "../../models/visitor";
import { records as data } from '../../data/records'
import {IRecord} from "../../models/record";
import {InteractionsWithDbApiService} from "../../api/swagger/services/interactions-with-db-api.service";

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {
  @Input() visitor: IVisitor
  details = false
  redactor = false
  records: IRecord[] = data

  // constructor(public dbService: InteractionsWithDbApiService) {}
  ngOnInit(): void { // запрос делать если details = true а не при инициализации
    // this.dbService.interactionsWithDbGetRecordGet$Response().subscribe(() => {
    //   this.loading = false
    // })
  }
  save(): void {

  }
}
