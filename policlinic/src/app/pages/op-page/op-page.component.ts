import {Component, OnInit} from '@angular/core';
import { visitors as data } from '../../data/visitors'
import {IVisitor} from "../../models/visitor";
import {InteractionsWithDbApiService} from "../../api/swagger/services/interactions-with-db-api.service";
import {PageEvent} from "@angular/material/paginator";
@Component({
  selector: 'app-op-page',
  templateUrl: './op-page.component.html',
  styleUrls: ['./op-page.component.css']
})
export class OpPageComponent implements OnInit {
  title = 'Все клиенты'
  public visitors: IVisitor[] = data
  loading = false
  term = ''
  public pageSlice = this.visitors.slice(0, 10)

  constructor(public dbService: InteractionsWithDbApiService) {
  }

  ngOnInit(): void {
    // this.loading = true
    this.dbService.interactionsWithDbGetVisitorsGet$Response().subscribe(
      (response) => {
        // Обработка успешного ответа от бэкенда
        console.log(response);
      },
      (error) => {
        // Обработка ошибки
        console.error(error);
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
