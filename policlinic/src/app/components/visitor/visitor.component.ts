import { Component, Input } from '@angular/core';
import {IVisitor} from "../../models/visitor";

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent {
  @Input() visitor: IVisitor
}
