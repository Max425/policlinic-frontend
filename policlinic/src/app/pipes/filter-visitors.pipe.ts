import { Pipe, PipeTransform } from '@angular/core';
import {IVisitor} from '../models/visitor'

@Pipe({
  name: 'filterVisitors'
})
export class FilterVisitorsPipe implements PipeTransform {

  transform(products: IVisitor[], search: string): IVisitor[] {
    if (search.length === 0) return products
    return products.filter(p => (`${p.firstName}${p.fatherName}${p.lastName}${p.passportNumber}${p.passportSeries}`)
                                        .toLowerCase().includes(search.toLowerCase()))
  }

}
