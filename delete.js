const fs = require('fs');
const readlineSync = require('readline-sync');	
var color = require('colors');

var data = fs.readFileSync('todos.json');		
let datas = JSON.parse(data);

const { exec } = require('child_process');
exec('node read.js', (error, stdout, stderr) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(stdout);
	
	var deleteItem = readlineSync.question(color.red('輸入要刪除的待辦事項「編號」:'));
	console.log('\n刪除事項:' + deleteItem);

	console.log('\n'+color.green.underline('代辦清單:\n'));
	for(let i=0; i < datas.length ; i++){
		if(deleteItem == i){
			datas.splice(deleteItem,1);
		}
		fs.writeFileSync('todos.json', JSON.stringify(datas));
		console.log( '#' + i + ' ' + datas[i].title + '\n');
	}
	process.exit(0);
});


