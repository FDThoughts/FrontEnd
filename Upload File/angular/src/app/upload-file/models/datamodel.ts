export class DataModel {
    header: Row;
    rows: Row[];
}

export class Row {
    columns: Column[];
}

export class Column {
    value: string;
}