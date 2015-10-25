var React = require('react');


var Subheader = React.createClass({
	getInitialState: function() {
		return {}
	},
	componentDidMount: function() {
		ChatStore.addWarningListener(this._onWarning);
	},
	componentWillUnmount: function() {
		ChatStore.removeWarningListener(this._onWarning);
	},
	render: function() {
		return (
			<div className = "row">

				<div className = "chatlisttitle">
					<h1>GROUPS</h1>
				</div>
				<div className = "boardtitle">
					<h1>BOARD</h1>
				</div>
				<div className = "chattitle">
					<h1>CHAT</h1>
				</div>
				<div className = "paneltitle">
					<h1>PANEL</h1>
				</div>
					
			</div>
		);
	},
	
});

module.exports = Subheader;
