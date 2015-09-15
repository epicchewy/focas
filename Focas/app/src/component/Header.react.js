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
			<div class = "header">
				<div class = "row">
					<div class = "col-md-2">
						<h1 class = "title"> SQUAD </h1>
					</div>
						<div class = "col-md-7">
					</div>
					<div class = "col-md-3">
						<ul class="navi">
        					<li><a href="#">JOIN</a></li>
        					<li><a href="#">NEW</a></li>
        					<li><a href="#">ABOUT</a></li>
    					</ul>
    				</div>
    			</div>
    		</div>
		);
	},
	
});

module.exports = Header;