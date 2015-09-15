var React = require('react');


function getStateFromStores(){
	return {
		login: true,
		chatRoomId: "test"
	}
}

var App = React.createClass({
	getInitialState: function(){

	},
	componentDidMount: function(){
		//store call
	},
	componentWillUnmount: function(){

	},
	render: function(){
		if(!this.state.login){
			return (
				<div>wtf is happening</div>
			);
		}else{
			var chatRoom = this.state.chatRoomId;
			return (
				<div>hello boys</div>

			);
			//make header chatroomarea and chatroom list 

		}
	}
});