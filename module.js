var fs = require('fs');
var color = require('colors');
var data = fs.readFileSync('todos.json');
let datas = JSON.parse(data);

const readlineSync = require('readline-sync');	

function read(){
	console.log(color.green.underline('\n待辦清單:\n'));
	for(let i=0; i < datas.length ; i++){
		console.log( '#' + i + ' ' + datas[i].title + '\n');
	}
}

function create(){
	var item = readlineSync.question(color.yellow('輸入要新增的待辦事項:'));
	datas.push({"title" : item});
	console.log('\n新增事項:' + item);
	WriteFileSync();
}

function deleteData(){
	var deleteItem = readlineSync.question(color.red('輸入要刪除的待辦事項「編號」:'));
	console.log('\n刪除事項:' + deleteItem);

	for(let i=0; i < datas.length ; i++){
		if(deleteItem == i){
			datas.splice(deleteItem,1);
		}
		WriteFileSync();
	}
}

function update(){
	var updateItem = readlineSync.question(color.yellow('輸入要「更新」的待辦事項「編號」:'));
	console.log('\n更新編號為:' + updateItem);

	for(let i=0; i < datas.length ; i++){
		if(updateItem == i){
			var reviseItem = readlineSync.question('輸入要「更新」的內容:');
			datas[i].title = reviseItem;
		}
		WriteFileSync();
	}
}

function WriteFileSync(){
	fs.writeFileSync('todos.json', JSON.stringify(datas));
}

module.exports = { 
	read: read,
	create: create,
	deleteData: deleteData,
	update: update,
}