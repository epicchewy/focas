var React = require('react');

// function getStateFromStores(){
// 	return {
// 		login: true,
// 		chatRoomId: "test"
// 	}
// }

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
		return (
			<div className = "top">
				<LoginView></LoginView>

				<Header></Header>
				<GroupChatRoom></GroupChatRoom>
				<Board></Board>
			</div>
		);
			//make header chatroomarea and chatroom list 
		}
	},
	getStateFromStores: function(){
		
	}
});

module.exports = App;