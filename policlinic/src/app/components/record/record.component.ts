import {Component, Input} from '@angular/core';
import {IRecord} from "../../models/record";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent {
  @Input() record: IRecord
}
