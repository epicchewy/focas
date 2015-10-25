var React = require('react');

var GeneralTile = React.createClass({
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
	<div className = "generaltile">
		<a href = "#"> name </a>
	</div>
	

		);
	},

});

module.exports = GeneralTile;
