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
			<div className="topHeader">
				<PageHeader>
					Focasssssss
				</PageHeader>
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
