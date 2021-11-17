const xlxs = require('xlsx');
var workbook = xlxs.readFile('./test.xlsx');
// console.log(workbook)

var first_sheet_name = workbook.SheetNames[0]; // 获取工作簿中的工作表名字

// console.log(first_sheet_name) // Sheet1

var address_of_cell = 'AY11'; // 提供一个引用样式(单元格下标)

var worksheet = workbook.Sheets[first_sheet_name]; // 获取对应的工作表对象

// console.log(worksheet)

var desired_cell = worksheet[address_of_cell]; // 获取对应的单元格对象

// console.log(desired_cell)

var desired_value = (desired_cell ? desired_cell.v : undefined);// 获取对应单元格中的数据

// console.log(desired_value)

// AY 1 - AY 11
// const range = 'AY1:AY11'; // https://github.com/SheetJS/sheetjs#general-structures
const start = { c: 50, r: 0 };
const end = { c: 50, r: 11 };

const workSheetJson = xlxs.stream.to_json(worksheet)
console.log(workSheetJson)