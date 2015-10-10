var React = require('react');
var Server = require('../../js/server');

function APIAction(){
	this._init = false;

	
}

APIAction.prototype.init = function(){
	if(this._init){
		return;
	}

	this.server = new Server;
	this.server.setUp();
	console.log("connected to db");
	
	
};

APIAction.prototype.sendText = function(){
	
};

APIAction.prototype.postToBoard = function(){

};

modules.export = APIAction;