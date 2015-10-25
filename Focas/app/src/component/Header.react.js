var React = require('react');
var PageHeader = require('react-bootstrap/lib/PageHeader');

var Header = React.createClass({
	getInitialState: function() {
		return this.getStateFromStores();
	},
	componentDidMount: function() {
		//ChatStore.addWarningListener(this._onWarning);
	},
	componentWillUnmount: function() {
		//ChatStore.removeWarningListener(this._onWarning);
	},
	render: function() {
		return (
			<div className = "header">
					<h1 className = "title"> SQUAD </h1>

					<ul className="navi">
        				<li><a href="#">JOIN</a></li>
        				<li><a href="#">NEW</a></li>
        				<li><a href="#">ABOUT</a></li>
    					</ul>
			</div>
		);
	},
	getStateFromStores: function(){
		return {
			title : 'test'
		}
	}
});

module.exports = Header;
