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
  check = false
  records: IRecord[] = data

  FirstName: string;
  LastName: string;
  FatherName: string;
  City: string;
  Gender: string;
  BirthDate: string;
  Nationality: string;
  PassportSeries: number;
  PassportNumber: number;
  DateIssue: string;

  constructor(public dbService: InteractionsWithDbApiService) {}
  ngOnInit(): void { // запрос делать если details = true а не при инициализации
    // this.dbService.interactionsWithDbGetRecordGet$Response().subscribe(() => {
    //   this.loading = false
    // })
  }

  save(): void {
    console.log("save")
    this.dbService.interactionsWithDbCreateVisitorPost$Response({
      firstName: this.FirstName,
      lastName: this.LastName,
      fatherName: this.FatherName,
      city: this.City,
      gender: this.Gender,
      birthDate: this.BirthDate,
      nationality: this.Nationality,
      passportSeries: this.PassportSeries,
      passportNumber: this.PassportNumber,
      dateIssue: this.DateIssue})
  }
}
