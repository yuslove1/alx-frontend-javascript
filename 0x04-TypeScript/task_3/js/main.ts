///<reference path="./crud.d.ts" />

import { RowId, RowElement } from "./interface";
import * as CRUD from "./crud"

//creat a row object
let row: RowElement = {
    fullName: "Guillaume",
    lastName: "Salva",
} 

//assigning the row and save the rowId 
const newRowID: RowId = CRUD.insertRow(row);

//update row object with age
const updatedRow: RowElement = {
    ...row,
    age: 23,
}

//update the row
CRUD.updateRow(newRowID, updatedRow);

//Delete row using the newRowID
CRUD.deleteRow(newRowID)