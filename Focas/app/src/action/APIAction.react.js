var React = require('react');
var parseCloud = require('../cloud/main');

function APIAction(){
	this._init = false;
	this.client;
}

APIAction.prototype.init = function(){
	if(this._init){
		return;
	}
	
};