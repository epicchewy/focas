var React = require('react');
var Header = require('./Header.react');
var Subheader = require('./Subheader.react');
var GroupTile = require('./GroupTile.react');
var LoginView = require('./LoginView.react');
var GroupChatRoom = require('./GroupChatRoom.react');
var Board = require('./Board.react');
// function getStateFromStores(){
// 	return {
// 		login: true,
// 		chatRoomId: "test"
// 	}
// }

var App = React.createClass({
	getInitialState: function(){
		return this.getStateFromStores();
	},
	componentDidMount: function(){
		//store call
	},
	componentWillUnmount: function(){
		//another store call
	},
	render: function(){
		console.log("loaded");
		return (
			<div className = "top">
				<LoginView></LoginView>

				<Header></Header>
				<Subheader></Subheader>

				<GroupTile></GroupTile>
				<GroupTile></GroupTile>
				
				<GroupChatRoom></GroupChatRoom>
				<Board></Board>
			</div>
		);
			//make header chatroomarea and chatroom list <GroupChatList></GroupChatList>
	},
	getStateFromStores: function(){
		return {
			login: true
		}
	}
});

module.exports = App;