import {Component, OnInit} from '@angular/core';
import {IVisitor} from "../../models/visitor";
import {InteractionsWithDbApiService} from "../../api/swagger/services/interactions-with-db-api.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-op-page',
  templateUrl: './op-page.component.html',
  styleUrls: ['./op-page.component.css']
})
export class OpPageComponent implements OnInit {
  title = 'Все клиенты';
  public visitors: IVisitor[] = [];
  loading = true;
  term = '';
  public pageSlice: IVisitor[] = [];

  constructor(public dbService: InteractionsWithDbApiService) {}

  ngOnInit(): void {
    this.dbService.interactionsWithDbGetVisitorsGet().subscribe(
      (response) => {
        this.visitors = response;
        this.pageSlice = this.visitors.slice(0, 10);
        this.loading = false;
      },
      (error) => {
        // Обработка ошибки
        console.error(error);
        this.loading = false;
      });
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
