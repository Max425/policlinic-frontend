import { Pipe, PipeTransform } from '@angular/core';
import {IVisitor} from '../models/visitor'

@Pipe({
  name: 'filterVisitors'
})
export class FilterVisitorsPipe implements PipeTransform {

  transform(products: IVisitor[], search: string): IVisitor[] {
    if (search.length === 0) return products
    return products.filter(p => (`${p.FirstName}${p.FatherName}${p.LastName}${p.PassportNumber}${p.PassportSeries}`)
                                        .toLowerCase().includes(search.toLowerCase()))
  }

}
