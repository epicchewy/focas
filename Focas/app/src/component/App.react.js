var React = require('react');
var Header = require('./Header.react');
var Subheader = require('./Subheader.react');
var GroupTile = require('./GroupTile.react');
var ChatMessage = require('./ChatMessage.react');
var ChatMessage2 = require('./ChatMessage2.react');
var BoardPost = require('./BoardPost.react');
var GroupInfo = require('./GroupInfo.react');
var LoginView = require('./LoginView.react');
var GroupChatRoom = require('./GroupChatRoom.react');
var Board = require('./Board.react');
var GeneralTile = require('./GeneralTile.react');
var Background = require('./Background.react');

// function getStateFromStores(){
// 	return {
// 		login: true,
// 		chatRoomId: "test"
// 	}
// }

function swap(targetId){
  if (document.getElementById){
        target = document.getElementById(targetId);
            if (target.style.display == "none"){
                target.style.display = "";
            } else{
                target.style.display = "none";
            }
                
  }
}


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
				<div className = "chatlistholder">
					<GroupTile></GroupTile>
					<GroupTile></GroupTile>
					<GroupTile></GroupTile>

				</div>

				<div className = "boardtilesholder">
					<BoardPost></BoardPost>
					<BoardPost></BoardPost>
					<BoardPost></BoardPost>
					<BoardPost></BoardPost>
					
				</div>

				<div className = "chatbox">
					<div className = "chatheader">
						<p>groupName</p>
					</div>
					<div className = "chats">
						<ChatMessage></ChatMessage>
						<ChatMessage2></ChatMessage2>
						<ChatMessage></ChatMessage>
						<ChatMessage2></ChatMessage2>
						<ChatMessage></ChatMessage>
						<ChatMessage2></ChatMessage2>

					</div>

					<form><input className = " msginput" type = "text" size = "35px"></input></form>

				</div>

				<div className = "panelholder">
					<GroupInfo></GroupInfo>
		
 

				</div>


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
