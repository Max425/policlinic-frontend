import {Component, Input} from '@angular/core';
import {IRecord} from "../../models/record";
import {ISurvey} from "../../models/survey";
import {surveys} from "../../data/surveys";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent {
  @Input() record: IRecord
  survey: ISurvey = surveys[0]
}
