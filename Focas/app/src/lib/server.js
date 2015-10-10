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
					//still connect no need to recreate tables
					this.dbConnection.use(dbConfig.db);
				}else{
					console.log("Created new focas database!");
					//connect
					for each(table in dbConfig.tables){
						r.db('focas').tableCreate(table).run(this.dbConnection, function(err, result){
							if(err){
								console.log("Error creating table: " + err);
							}else{
								console.log("table " + table + " made : " + result);
							}
						});
					}
					this.dbConnection.use(dbConfig.db);
				}
			})
		}
	});
};

Server.prototype.authenticateUser = function(username, pass, age){
	r.table(dbConfig.tables.accounts).filter({user: username, password: pass, age: age}).run(this.dbConnection, function(err, result){
		if(err){
			console.log("error logging in : " + err);
		}else{
			console.log("successful log in : " + result);
		}
	});
}

Server.prototype.addNewUser = function(userData){
	r.table(dbConfig.tables.accounts).insert({
		{user: userData.username, password: userData.password, email: userData.email, fullName : userData.fullName, age: userData.age}
	}),run(this.dbConnection, function(err, result){
		if(err){
			console.log("add user error: " + err);
		}else{
			console.log("add user success: " + result);
		}
	});

	this.sendConfirmEmail();
}

Server.prototype.sendConfirmEmail = function(email){
	var email = new sendgrid.Email();

	email.addTo(email);
	email.setFrom("awsomerdude9000.llc@gmail.com");
	email.setSubject("Welcome to Focas!");
	email.setHtml("Your Focas account has now been verified! [Do not reply to this email]");

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

Server.prototype.postToBoard = function(post, user, focasFeed){
	r.table(dbConfig.tables.board).insert({
		
	});
};

Server.prototype.streamMessages = function(){
	
};

Server.prototype.logout = function(){
	if(this.dbConnection)
		this.dbConnection.close({noreplyWait: false}, function(err) { if (err) throw err; })
}
module.exports = Server;