var fs = require('fs');

// readline : is model that deal with input/output.
// Then to call createInterface and use global variables:process to set I/O source

const readline = require('readline').createInterface({
	
	input : process.stdin,
	output : process.stdout
	
});

//readline.question : let user to input value from terminal(cmd)
readline.question('輸入要新增的待辦事項: ', function(item){
	
	fs.readFile('todos.json', function(err,data){
		
		let datas = JSON.parse(data);
		datas.push({"title" : item});
		console.log('\n新增事項:' + item);
		
		fs.writeFile('todos.json', JSON.stringify(datas), function(err){
			console.log('\n-----------------------\n代辦清單:\n');
			for(let i=0; i < datas.length ; i++){
				console.log( '#' + i + ' ' + datas[i].title + '\n');
			}
			process.exit(0);
		})
		
		
	});
	
});