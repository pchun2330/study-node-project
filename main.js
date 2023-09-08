const readlineSync = require('readline-sync');

var module = require('./module');

function showMenu(){
	module.read();
	const choice = readlineSync.question('要執行什麼?\n1.Create ToDoList\n2.Delete ToDoList\n3.Update ToDoList\n4.Quit\n請輸入編號:');
	switch(choice){
		case '1':
			module.create();
			showMenu();
			break;
		case '2':
			module.deleteData();
			showMenu();
			break;
		case '3':
			module.update();
			showMenu();
			break;
		case '3':
			process.exit(0);
			break;	
		default:
			break;
	}
}
showMenu();