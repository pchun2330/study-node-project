var fs = require('fs');

fs.readFile('todos.json',function(err,data){
	
	console.log('\n待辦清單:\n');
	let datas = JSON.parse(data);
	
	for(let i=0; i < datas.length ; i++){
		console.log( '#' + i + ' ' + datas[i].title + '\n');
	}
	
	process.exit(0);
	
});
