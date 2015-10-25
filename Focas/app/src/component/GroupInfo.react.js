var React = require('react');

var GroupInfo = React.createClass({
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
		<div className = "groupinfo">
				<img src="C:/Users/Ryan/Desktop/squad%20sample%20website/images/wesphoto.png"></img>
				<div className = "info">
					<p>Group Name: Focammunications
					Group Id: L56DHEU3
					Password: hidden</p>
				</div>

		</div>
	

		);
	},

});

module.exports = GroupInfo;
