import { Component, OnInit } from '@angular/core';
import { visitors as data } from '../../data/visitors'
import {IVisitor} from "../../models/visitor";
import {PageEvent} from "@angular/material/paginator";

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
  public pageSlice = this.visitors.slice(0, 10)

  // constructor(public dbService: InteractionsWithDbApiService) {}

  ngOnInit(): void {
    // this.dbService.interactionsWithDbGetVisitorsGet().subscribe(() => {
    //   this.loading = false
    // })
  }
  onPageChange(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.visitors.length) {
      endIndex = this.visitors.length;
    }
    this.pageSlice = this.visitors.slice(startIndex, endIndex);
  }
}
