var r = require('rethinkdb');
var sendgrid = require("sendgrid")('username', 'API-KEY');

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
					for(table in dbConfig.tables){
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
	var indexs = {'name', 'users', 'messages', 'groupId','focasGroups'}
	for(index in indexs){
		if(index ==== 'users' || index === 'focasGroups'){
			r.table('gHT').indexCreate(index, {multi: true}).run(this.dbConnection, function(err, result){
				if (err) ? console.log("error creating group hash table : " + err); : console.log("result of group hash table : " + result);
			});
		}else{
			r.table('gHT').indexCreate(index).run(this.dbConnection, function(err, result){
				if (err) ? console.log("error creating group hash table : " + err); : console.log("result of group hash table : " + result);
			});
		}
		
	}
	
};

Server.prototype.createUsersTable = function(){
	r.table.('users').indexCreate('userId', r.row('data').run(this.dbConnection, function(err, result){
		if(err){
			console.log("error created user table : " + err);
		}else{
			console.log("result user table : " + result);
		}
	});
};

Server.prototype.createBoardTable = function(){
	var indexes = ['boardId', 'groupIds', 'posts'];
	for(index in indexes){
		if(index === 'groupIds'){
			r.table('board').indexCreate(index, {multi: true}).run(this.dbConnection, function(err, reuslt){
				if (err) ? console.log("error creating group hash table : " + err); : console.log("result of group hash table : " + result);
			});	
		}else{
			r.table('board').indexCreate(index).run(this.dbConnection, function(err, reuslt){
				if (err) ? console.log("error creating group hash table : " + err); : console.log("result of group hash table : " + result);
			});
		}
		
	}
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
	}).run(this.dbConnection, function(err, result){
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

Server.prototype.postToBoard = function(post, user, focasFeed, id, cb){
	r.table(dbConfig.tables.board).get(id).update(
		{posts: r.row('posts').append(post)}
	).run(this.dbConnection, function(err, result){
		if(err){
			console.log("error posting to board : " + err);
		}else{
			console.log("successfully posted to baord : " + result);
		}
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
	r.table('board').filter({focasId: focasId}).changes().run(this.dbConnection, function(err, cursor){
		if(err){
			console.log("error finding board : " + err);
		}else{
			console.log("recent posts");
			cursor.each(console.log);
		}
	});
};

Server.prototype.createNewGroup = function(name, user, userArr, groupId){
	//update the grouphasttable and insert new object
	r.table('gHT').insert({
		name: name,
		users: userArr,
		messages: {},
		groupId: groupId,
		board: []
	}).run(this.dbConnection, function(err, result){
		if(err){
			console.log("error creating new group : " + err);
		}else{
			console.log("new group created : " + result);
		}
	});
}

Server.prototype.addToGroup = function(userId, groupId){
	r.table('gHT').get(groupId).update(
		{users : r.row('users').append(userId)}
	).run(this.dbConnection, function(err, result){
		if (err) ? console.log("error creating group hash table : " + err); : console.log("result of group hash table : " + result);
	});
}

Server.prototype.sendMessage = function(messageHash, message){
	r.table('messages').get(messageHash).update(
		{ 
			messages: r.row('messages').append(message)
		}
	).run(this.dbConnection, function(err, result){
		if(err){
			console.log("error sending message : " + err);
		}else{
			console.log("sent message : " + result);
		}
	});
};

Server.prototype.logout = function(){
	if(this.dbConnection)
		this.dbConnection.close({noreplyWait: false}, function(err) { if (err) throw err; })
}
module.exports = Server;