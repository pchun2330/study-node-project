const readlineSync = require('readline-sync');
const iconv = require('iconv-lite');

const itemBuffer = iconv.encode(readlineSync.question('輸入要新增的待辦事項: ', 'utf8'), 'big5');
const item = iconv.decode(itemBuffer, 'big5');

console.log('輸入的中文字符:', item);
