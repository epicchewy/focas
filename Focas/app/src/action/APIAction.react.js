var React = require('react');
var parseCloud = require('../cloud/main');
var Client = require('../../../cloud/main.js');


function APIAction(){
	this._init = false;
	this.client;
}

APIAction.prototype.init = function(){
	if(this._init){
		return;
	}
	this.client = Client(this);
};

APIAction.prototype.sendText = function(){

};