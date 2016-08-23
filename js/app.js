angular
.module('myApp', ['ngAnimate', 'ui.router'])

.controller('mainCtrl', ['dbGetFiles', mainCtrl])

function mainCtrl(dbGetFiles){
	var vm = this;
	dbGetFiles.getFiles()
	.then(function(response){
		vm.files = response;
		console.log(vm.files);
	});
}