import {Component, Input, OnInit} from '@angular/core';
import {IRecord} from "../../models/record";
import {ISurvey} from "../../models/survey";
import {InteractionsWithDbApiService} from "../../api/swagger/services/interactions-with-db-api.service";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  @Input() record: IRecord
  survey: ISurvey
  constructor(public dbService: InteractionsWithDbApiService) {}

  ngOnInit(): void {
    this.dbService.interactionsWithDbGetSurveyByIdIdGet({id: this.record.surveyId}).subscribe(
      (response) => {
        this.survey = response;
      },
      (error) => {
        console.error(error);
      });
  }

}
