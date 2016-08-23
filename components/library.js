angular
.module('myApp')

.service('dbCreateDropbox', [dbCreateDropbox])
.service('dbGetFiles', ['$q', 'dbCreateDropbox', dbGetFiles])


function dbCreateDropbox(){
	this.dbx = new Dropbox({ accessToken: ''});
}

function dbGetFiles($q, dbCreateDropbox){
	this.getFiles = getFiles;
	function getFiles(){
		return dbCreateDropbox.dbx.filesListFolder({
			path: '',
			include_media_info: true
		})
		.then(function(response){
			console.log(response);
			return $q.when(response);
		}, function(error){
			console.log(error);
		});
	}
}