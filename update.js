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
	
	var updateItem = readlineSync.question(color.yellow('輸入要「更新」的待辦事項「編號」:'));
	console.log('\n更新編號為:' + updateItem);

	for(let i=0; i < datas.length ; i++){
		if(updateItem == i){
			var reviseItem = readlineSync.question('輸入要「更新」的內容:');
			datas[i].title = reviseItem;
		}
		fs.writeFileSync('todos.json', JSON.stringify(datas));
	}
	
	console.log(color.green.underline('\n代辦清單:\n'));
	for(let i=0; i < datas.length ; i++){
		console.log( '#' + i + ' ' + datas[i].title + '\n');
	}
	
	process.exit(0);
});


