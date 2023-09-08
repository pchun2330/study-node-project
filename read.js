var fs = require('fs');

//Sync is synchronize
var data = fs.readFileSync('todos.json');

console.log('\n待辦清單:\n');
let datas = JSON.parse(data);

for(let i=0; i < datas.length ; i++){
	console.log( '#' + i + ' ' + datas[i].title + '\n');
}

process.exit(0);

