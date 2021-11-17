const xlxs = require('xlsx');
const {readFile} = require('fs').promises;

(async function (params) {
    
    // 获取数据
    const excelBuffer = await readFile('./test.xlsx');
    // 解析数据
    const result = xlxs.read(excelBuffer,{
        type:'buffer',
        cellHTML:false,
    });
    
    console.log('TCL: result', result);

})();


