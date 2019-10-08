import { DataModel } from './datamodel';

export class ResultModel {
    isHeadedFiles: boolean;
    resultList: CsvResult[];
}

export class CsvResult {
    success: boolean;
    errorMessage: string;
    parsedCsvContent: DataModel;
}