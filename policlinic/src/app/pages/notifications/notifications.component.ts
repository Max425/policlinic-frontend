import { Component, OnInit } from '@angular/core';
import {IVisitor} from "../../models/visitor";
import {PageEvent} from "@angular/material/paginator";
import {conflicts as data} from "../../data/conflicts";
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
  conflicts: IConflict[] = data
  loading = false
  term = ''
  public pageSlice = this.conflicts.slice(0, 10)

  constructor(public signalRService: SignalRService, private http: HttpClient) {}

  ngOnInit(): void {
    this.signalRService.startConnection();
    this.signalRService.addTransferDataListener();
    this.startHttpRequest();
  }
  private startHttpRequest = () => {
    this.http.get('https://localhost:7014/api/conflict')
      .subscribe(res => {
        console.log(res);
      })
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
