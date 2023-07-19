import { Component, Input, OnInit } from '@angular/core';
import { IVisitor } from '../../models/visitor';
import { IRecord } from '../../models/record';
import { InteractionsWithDbApiService } from '../../api/swagger/services/interactions-with-db-api.service';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css'],
})
export class VisitorComponent implements OnInit {
  @Input() visitor: IVisitor;
  details = false;
  redactor = false;
  records: IRecord[] = [];

  constructor(public dbService: InteractionsWithDbApiService) {}

  ngOnInit(): void {}

  showRecords(): void {
    this.details = !this.details;
    if (this.details) {
      this.dbService
        .interactionsWithDbGetRecordsByVisitorIdIdGet({ id: this.visitor.id })
        .subscribe(
          (response) => {
            this.records = response;
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }

  save(): void {
    this.redactor = !this.redactor;
    this.dbService.interactionsWithDbEditVisitorPut(this.visitor)
      .subscribe(
        (response) => {
          // Handle the success response if needed
          console.log('Visitor data saved successfully:', response);
        },
        (error) => {
          console.error('Error while saving visitor data:', error);
        }
      );
  }
}
