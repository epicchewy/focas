var React = require('react');
var Server = require('../../js/server');
var async = require('async');
var AppDispatcher = require('../core/AppDispatcher.react');
var ActionType = require('ActionType');

function APIAction(){
	this._init = false;
	this.server;
}

APIAction.prototype.init = function(){
	if(this._init){
		return;
	}

	this.server = new Server;
	this.server.setUp();
	console.log("connected to db");
	
	this._init = true;
};

APIAction.prototype.sendText = function(){
	
};

APIAction.prototype.postToBoard = function(post, user, focasFeed){
	this.server.postToBoard(post, user, focasFeed);
};

APIAction.prototype.fetchMessages = function(feedId){
	async.nextTick(function(){
		AppDispatcher.dispatch({
			type: ActionType.FETCH_MESSAGES,
			feed: feedId
		})
	});
};

module.exports = APIAction;