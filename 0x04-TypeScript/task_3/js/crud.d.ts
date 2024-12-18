
import { RowId, RowElement } from "./interface";

declare function insertRow(row: any): RowId;
declare function deleteRow(rowId: RowId): void;
declare function updateRow(rowId: RowId, row: RowElement): RowElement;