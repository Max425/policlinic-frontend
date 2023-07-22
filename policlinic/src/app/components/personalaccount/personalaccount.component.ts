import {Component, Input, OnInit} from '@angular/core';
import {InteractionsWithDbApiService} from "../../api/swagger/services/interactions-with-db-api.service";
import {IOperator} from "../../models/operator";

@Component({
  selector: 'app-personalaccount',
  templateUrl: './personalaccount.component.html',
  styleUrls: ['./personalaccount.component.css']
})
export class PersonalaccountComponent implements OnInit {
  operator: IOperator;
  constructor(public dbService: InteractionsWithDbApiService){}
  ngOnInit(): void {
    const id = Number(localStorage.getItem('id'));
    this.dbService.interactionsWithDbGetOperatorByIdIdGet({id: id}).subscribe(
      (response) => {
        this.operator = response;
      },
      (error) => {
        console.error(error);
      });
  }
}
