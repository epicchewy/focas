var React = require('react');

var Board = React.createClass({
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
			<div className = "board">body</div>
		);
	},

});

module.exports = Board;