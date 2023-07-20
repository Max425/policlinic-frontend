import { Component, OnInit } from '@angular/core';
import {IVisitor} from "../../models/visitor";
import {PageEvent} from "@angular/material/paginator";
import {conflicts as data} from "../../data/conflicts";
import {IConflict} from "../../models/conflict";
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  title = 'Нераспознанные'
  conflicts: IConflict[] = data
  loading = false
  term = ''
  public pageSlice = this.conflicts.slice(0, 10)

  // constructor(public dbService: InteractionsWithDbApiService) {}

  ngOnInit(): void {
    // this.dbService.interactionsWithDbGetVisitorsGet().subscribe(() => {
    //   this.loading = false
    // })
  }
  onPageChange(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.conflicts.length) {
      endIndex = this.conflicts.length;
    }
    this.pageSlice = this.conflicts.slice(startIndex, endIndex);
  }
}
