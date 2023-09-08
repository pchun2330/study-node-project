const fs = require('fs');
var color = require('colors');
// readline : is model that deal with input/output.
// Then to call createInterface and use global variables:process to set I/O source

// add to synchronize : need to 「 npm install readline-sync 」
//readfile
const readlineSync = require('readline-sync');	

//readline.question : let user to input value from terminal(cmd)	
//revise to synchronize
var data = fs.readFileSync('todos.json');		
let datas = JSON.parse(data);

//add item to file
var item = readlineSync.question(color.yellow('輸入要新增的待辦事項:'));

datas.push({"title" : item});
console.log('\n新增事項:' + item);

//write file
fs.writeFileSync('todos.json', JSON.stringify(datas));

console.log('\n'+color.green.underline('代辦清單:\n'));
for(let i=0; i < datas.length ; i++){
	console.log( '#' + i + ' ' + datas[i].title + '\n');
}

process.exit(0);
