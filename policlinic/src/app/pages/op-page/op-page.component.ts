import {Component, OnInit} from '@angular/core';
import { visitors as data } from '../../data/visitors'
import {IVisitor} from "../../models/visitor";
import {InteractionsWithDbApiService} from "../../api/swagger/services/interactions-with-db-api.service";
@Component({
  selector: 'app-op-page',
  templateUrl: './op-page.component.html',
  styleUrls: ['./op-page.component.css']
})
export class OpPageComponent implements OnInit {
  title = 'Все клиенты'
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
