import {IConflict} from "../models/conflict";

export const conflicts: IConflict[] = [
  {
    "conflictPerson": {
      "id": -1,
      "firstName": "Eve",
      "lastName": "Browns",
      "fatherName": "Sr.",
      "city": "Chicago",
      "gender": "Female",
      "birthDate": "1998-12-09T21:00:00Z",
      "nationality": "American",
      "passportSeries": 9876,
      "passportNumber": 543210,
      "photoBase64": "Base64EncodedPhoto3",
      "dateIssue": "2015-03-14T21:00:00Z"
    },
    "message": "Посетитель не был найден, проверьте корректность данных перед сохранением"
  },
  {
    "conflictPerson": {
      "id": -1,
      "firstName": "Alice",
      "lastName": "Johnson",
      "fatherName": "Sr.",
      "city": "New York",
      "gender": "Female",
      "birthDate": "1990-05-14T20:00:00Z",
      "nationality": "American",
      "passportSeries": 1234,
      "passportNumber": 567890,
      "photoBase64": "D:\\passport.jpg",
      "dateIssue": "2009-12-31T21:00:00Z"
    },
    "message": "Посетитель с тамики паспортными данными уже существует, проверьте корректность данных перед сохранением"
  },
  {
    "conflictPerson": {
      "id": -1,
      "firstName": "Alice",
      "lastName": "Johnson",
      "fatherName": "Sr.",
      "city": "New York",
      "gender": "Female",
      "birthDate": "1990-05-14T20:00:00Z",
      "nationality": "American",
      "passportSeries": 1234,
      "passportNumber": 567890,
      "photoBase64": "D:\\passport.jpg",
      "dateIssue": "2009-12-31T21:00:00Z"
    },
    "message": "Посетитель с тамики паспортными данными уже существует, проверьте корректность данных перед сохранением"
  }
]
