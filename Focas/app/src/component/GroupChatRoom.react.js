var React = require('react');

var GroupChatRoom = React.createClass({
	getInitialState: function(){
		return{
			login: false
		}
	},
	componentDidMount: function(){

	},
	componentWillUnmount: function(){
		//will unmount
	},
	render: function(){
		return (
			<div className = "groupChatRoom">body</div>
		);
	},

});

module.exports = GroupChatRoom;