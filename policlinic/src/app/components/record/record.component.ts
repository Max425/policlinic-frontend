import {Component, Input} from '@angular/core';
import {IRecord} from "../../models/record";
import {ISurvey} from "../../models/survey";
import {InteractionsWithDbApiService} from "../../api/swagger/services/interactions-with-db-api.service";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent {
  @Input() record: IRecord
  survey: ISurvey
  constructor(public dbService: InteractionsWithDbApiService) {}

}
