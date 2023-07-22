import { Component, OnInit } from '@angular/core';
import {IVisitor} from "../../models/visitor";
import {PageEvent} from "@angular/material/paginator";
import {IConflict} from "../../models/conflict";
import {SignalRService} from "../../api/swagger/services/signal-r.service";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  title = 'Нераспознанные Клиенты'
  loading = false
  term = ''
  public pageSlice = this.signalRService.data.slice(0, 10)

  constructor(public signalRService: SignalRService) {}

  ngOnInit() {

  }

  onPageChange(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.signalRService.data.length) {
      endIndex = this.signalRService.data.length;
    }
    this.pageSlice = this.signalRService.data.slice(startIndex, endIndex);
  }
}
