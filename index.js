let csvToJson = require('convert-csv-to-json');

let fileInputName = 'test.csv'; 
let fileOutputName = 'output.json';

let json = csvToJson.fieldDelimiter(',').parseSubArray('*',',').getJsonFromCsv("test.csv");
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);
for(let i=0; i<json.length;i++){
    console.log("added json ", i, " successfully!");
}
