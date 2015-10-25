var React = require('react');

var Background = React.createClass({
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
			<div className = "background">
				<p>background</p>

			</div>
		);
	},

});

module.exports = Background;
