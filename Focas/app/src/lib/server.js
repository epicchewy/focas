var r = require('rethinkdb');
var _ = require('underscore');
var sendgrid = require("sendgrid")('epicchewy', 'CzoEw-xbQRiy0Xc8e5255A');

var dbConfig = {
	host: 'localhost',
	port: '28015',
	db: 'focas',
	tables:{
		groupHashTable : 'gHT',
		users: 'users',
		messages: 'messages',
		board: 'board',
		test: 'test',
		accounts: 'accounts'

	}
};

Server.prototype.dbConnection= null;

Server.prototype.setUp = function(){
	//make initial connection to db
	r.connect({host: dbConfig.host, port: dbConfig.port}, function(err, connection){
		if(err){
			console.log("error : " + err);
		}else{
			this.dbConnection = connection;
			r.dbCreate(dbConfig.db).run(this.dbConnection, function(err, result){
				if(err){
					console.log("Database already exists! connecting..");
					//still connect
					this.dbConnection.use(dbConfig.db);
				}else{
					console.log("Created new focas database!");
					//connect
					this.dbConnection.use(dbConfig.db);
				}
			})
		}
	});
};

Server.prototype.authenticateUser = function(username, pass){

}

Server.prototype.registerUser = function(username, pass){
	
}

Server.prototype.addNewUser = function(username, pass, email){


	this.sendConfirmEmail();
}

Server.prototype.sendConfirmEmail = function(){
	var email = new sendgrid.Email();

	email.addTo("test@sendgrid.com");
	email.setFrom("you@youremail.com");
	email.setSubject("Sending with SendGrid is Fun");
	email.setHtml("and easy to do anywhere, even with Node.js");

	sendgrid.send(email);
}

Server.prototype.loadUserData = function(user){
	//load groups/boards and have empty middle portion for empty chatroom
	r.table(dbConfig.tables.groupHashTable).map(
		r.branch(
			r.row('id').eq(user);
		)
	).run(this.dbConnection, function(err, result){
		if(err){
			console.log("error : " + err);
		}else{
			console.log("result : " + result);
		}
	});
	r.table(dbConfig.tables.board).run(this.dbConnection, function(err, result){
		if(err){
			console.log("error : " + err);
		}else{
			console.log("result : " + result);
		}
	});
}

Server.prototype.realMessages = function(){

};

Server.prototype.postToBoard = function(message, user, feed){
	r.table(dbConfig.tables.board).insert()
}

Server.prototype.logout = function(){
	if(this.dbConnection)
		this.dbConnection.close({noreplyWait: false}, function(err) { if (err) throw err; })
}
module.exports = Server;