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
      "birthDate": "1998-12-09",
      "nationality": "American",
      "passportSeries": 9876,
      "passportNumber": 543210,
      "photoBase64": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Pasport_RF.jpg/274px-Pasport_RF.jpg",
      "dateIssue": "2015-03-14"
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
      "birthDate": "1990-05-14",
      "nationality": "American",
      "passportSeries": 1234,
      "passportNumber": 567890,
      "photoBase64": "D:\\passport.jpg",
      "dateIssue": "2009-12-31"
    },
    "message": "Посетитель с такими паспортными данными уже существует, проверьте корректность данных перед сохранением"
  },
  {
    "conflictPerson": {
      "id": -1,
      "firstName": "Alice",
      "lastName": "Johnson",
      "fatherName": "Sr.",
      "city": "New York",
      "gender": "Female",
      "birthDate": "1990-05-14",
      "nationality": "American",
      "passportSeries": 1234,
      "passportNumber": 567890,
      "photoBase64": "D:\\passport.jpg",
      "dateIssue": "2009-12-31"
    },
    "message": "Посетитель с тамики паспортными данными уже существует, проверьте корректность данных перед сохранением"
  }
]
