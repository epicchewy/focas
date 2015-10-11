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
								switch (table):
									case "gHT":
										this.createGroupHashTable();
									case "users":
										this.createUsersTable();
									case "board":
										this.createBoardTable();
									default: 
										//do nothing other tables are standard tables

							}
						});
					}
					this.dbConnection.use(dbConfig.db);
				}
			})
		}
	});
};

Server.prototype.createGroupHashTable = function(){
	r.table('gHT').indexCreate().run(this.dbConnection, function(err, result){
		
	});
};

Server.prototype.createUsersTable = function(){

};

Server.prototype.createBoardTable = function(){

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

Server.prototype.loadUserData = function(user, cb){
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

Server.prototype.postToBoard = function(post, user, focasFeed, cb){
	r.table(dbConfig.tables.board).insert({

	});
};

Server.prototype.subscribeToMessages = function(groupId, cb){
	//find room in table
	r.table(dbConfig.tables.groupHashTable).filter({group: groupId}).run(this.dbConnection, function(err, result){
		if(err){
			console.log("error finding group : " + err);
		}else{
			console.log("message result : " + result);
			var messageHash = result.messageHash;
			r.table(dbConfig.tables.messages).filter({messageHash: messageHash}).changes().run(this.dbConnection, function(err, cursor){
				if(err){
					console.log("error subscribing to messages : " + err);
				}else{
					cursor.each(console.log);
				}
			});
		}
		
	});
};

Server.prototype.subscribeToBoard = function(focasId, groupId, cb){
	
};

Server.prototype.logout = function(){
	if(this.dbConnection)
		this.dbConnection.close({noreplyWait: false}, function(err) { if (err) throw err; })
}
module.exports = Server;