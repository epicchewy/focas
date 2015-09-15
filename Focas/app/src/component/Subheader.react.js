var React = require('react');


var Header = React.createClass({
	getInitialState: function() {
		return this._getStateFromStores();
	},
	componentDidMount: function() {
		ChatStore.addWarningListener(this._onWarning);
	},
	componentWillUnmount: function() {
		ChatStore.removeWarningListener(this._onWarning);
	},
	render: function() {
		return (
			<div class = "bars">
				<div class = "row">

					<div class = "col-md-2">
						<div class = "chatlisttitle">
							<h1>GROUPS</h1>
						</div>
					</div>


					<div class = "col-md-4">
						<div class = "boardtitle">
							<h1>BOARD</h1>
						</div>
					</div>


					<div class = "col-md-3">
						<div class = "chattitle">
							<h1>CHAT</h1>
						</div>
					</div>


					<div class = "col-md-3">
						<div class = "paneltitle">
							<h1>PANEL</h1>
						</div>
					</div>
					
				</div
			</div>
		);
	},
	
});

module.exports = Header;