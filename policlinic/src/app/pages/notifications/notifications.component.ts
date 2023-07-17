import { Component, OnInit } from '@angular/core';
import { visitors as data } from '../../data/visitors'
import {IVisitor} from "../../models/visitor";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  title = 'Нераспознанные'
  visitors: IVisitor[] = data
  loading = false
  term = ''

  // constructor(public dbService: InteractionsWithDbApiService) {}

  ngOnInit(): void {
    // this.dbService.interactionsWithDbGetVisitorsGet().subscribe(() => {
    //   this.loading = false
    // })
  }
}
