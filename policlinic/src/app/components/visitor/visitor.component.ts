import {Component, Input, OnInit} from '@angular/core';
import {IVisitor} from "../../models/visitor";

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {
  @Input() visitor: IVisitor
  details = false
  ngOnInit(): void {
  }
}
