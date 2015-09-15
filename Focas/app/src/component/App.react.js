var React = require('react');

function getStateFromStores(){
	return {
		login: true,
		chatRoomId: "test"
	}
}

var App = React.createClass({
	getInitialState: function(){
		return getStateFromStores();
	},
	componentDidMount: function(){
		//store call
	},
	componentWillUnmount: function(){
		//another store call
	},
	render: function(){
		console.log("loaded");
		if(this.state.login === false){
			return (
				<div>wtf is happening</div>
			);
		}else{
			var chatRoom = this.state.chatRoomId;
			return (
				<div>hello boys welcome to {chatRoom}!</div>

			);
			//make header chatroomarea and chatroom list 
//sdfa
		}
	}
});

module.exports = App;