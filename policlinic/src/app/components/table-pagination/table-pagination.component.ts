import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css'],
})
export class TablePaginationComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'Id',
    'FirstName',
    'LastName',
    'FatherName',
    'City',
    'Gender',
    'BirthDate',
    'Nationality',
    'PassportSeries',
    'PassportNumber',
    'DateIssue',
    'Edit',
  ];
  dataSource = new MatTableDataSource<Visitor>(ELEMENT_DATA);
  editIconPath = 'assets/edit.png';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface Visitor {
  Id: number;
  FirstName: string;
  LastName: string;
  FatherName: string;
  City: string;
  Gender: string;
  BirthDate: string;
  Nationality: string;
  PassportSeries: number;
  PassportNumber: number;
  PhotoBase64: string;
  DateIssue: string;
}


const ELEMENT_DATA: Visitor[] = [
  {
    Id: 1,
    FirstName: 'John',
    LastName: 'Doe',
    FatherName: 'Smith',
    City: 'New York',
    Gender: 'Male',
    BirthDate: '1990-05-15',
    Nationality: 'American',
    PassportSeries: 1234,
    PassportNumber: 56789,
    PhotoBase64: 'Base64EncodedPhotoString',
    DateIssue: '2022-02-28',
  },
  {
    Id: 2,
    FirstName: 'Alice',
    LastName: 'Johnson',
    FatherName: 'Brown',
    City: 'Los Angeles',
    Gender: 'Female',
    BirthDate: '1985-08-21',
    Nationality: 'American',
    PassportSeries: 4321,
    PassportNumber: 98765,
    PhotoBase64: 'Base64EncodedPhotoString',
    DateIssue: '2022-03-15',
  },
  {
    Id: 3,
    FirstName: 'Michael',
    LastName: 'Williams',
    FatherName: 'Johnson',
    City: 'Chicago',
    Gender: 'Male',
    BirthDate: '1992-02-10',
    Nationality: 'American',
    PassportSeries: 1111,
    PassportNumber: 22222,
    PhotoBase64: 'Base64EncodedPhotoString',
    DateIssue: '2022-04-01',
  },
  {
    Id: 4,
    FirstName: 'Emily',
    LastName: 'Smith',
    FatherName: 'Johnson',
    City: 'San Francisco',
    Gender: 'Female',
    BirthDate: '1995-11-02',
    Nationality: 'American',
    PassportSeries: 5555,
    PassportNumber: 44444,
    PhotoBase64: 'Base64EncodedPhotoString',
    DateIssue: '2022-05-20',
  },
  {
    Id: 5,
    FirstName: 'Matthew',
    LastName: 'Brown',
    FatherName: 'Davis',
    City: 'Seattle',
    Gender: 'Male',
    BirthDate: '1988-07-18',
    Nationality: 'American',
    PassportSeries: 9999,
    PassportNumber: 77777,
    PhotoBase64: 'Base64EncodedPhotoString',
    DateIssue: '2022-06-10',
  },
  {
    Id: 6,
    FirstName: 'Olivia',
    LastName: 'Anderson',
    FatherName: 'Taylor',
    City: 'Boston',
    Gender: 'Female',
    BirthDate: '1993-04-05',
    Nationality: 'American',
    PassportSeries: 7777,
    PassportNumber: 33333,
    PhotoBase64: 'Base64EncodedPhotoString',
    DateIssue: '2022-07-05',
  },
  {
    Id: 7,
    FirstName: 'Ethan',
    LastName: 'Davis',
    FatherName: 'Miller',
    City: 'Houston',
    Gender: 'Male',
    BirthDate: '1991-09-27',
    Nationality: 'American',
    PassportSeries: 8888,
    PassportNumber: 66666,
    PhotoBase64: 'Base64EncodedPhotoString',
    DateIssue: '2022-08-15',
  },
  {
    Id: 8,
    FirstName: 'Sophia',
    LastName: 'Wilson',
    FatherName: 'Clark',
    City: 'Miami',
    Gender: 'Female',
    BirthDate: '1994-12-12',
    Nationality: 'American',
    PassportSeries: 2468,
    PassportNumber: 13579,
    PhotoBase64: 'Base64EncodedPhotoString',
    DateIssue: '2022-09-25',
  },
  {
    Id: 9,
    FirstName: 'Aiden',
    LastName: 'Taylor',
    FatherName: 'Brown',
    City: 'Dallas',
    Gender: 'Male',
    BirthDate: '1987-03-08',
    Nationality: 'American',
    PassportSeries: 1357,
    PassportNumber: 24680,
    PhotoBase64: 'Base64EncodedPhotoString',
    DateIssue: '2022-10-12',
  },
  {
    Id: 10,
    FirstName: 'Isabella',
    LastName: 'Harris',
    FatherName: 'Robinson',
    City: 'Atlanta',
    Gender: 'Female',
    BirthDate: '1996-06-24',
    Nationality: 'American',
    PassportSeries: 3698,
    PassportNumber: 80246,
    PhotoBase64: 'Base64EncodedPhotoString',
    DateIssue: '2022-11-30',
  },
];

