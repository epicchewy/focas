var React = require('react');

var GroupTile = React.createClass({
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
			<div className = "grouptile">
				<div className = "lastmsg">
					<div className = "groupName">
						<strong>groupName</strong>
					</div>
					<p>lastMessenger:</p>
					<p> lastMessage</p>
				</div>

			</div>
		);
	},

});

module.exports = GroupTile;
