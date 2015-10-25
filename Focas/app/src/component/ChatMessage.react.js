var React = require('react');

var ChatMessage = React.createClass({
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
			<div className = "posterinfo">
				<span>
					<img src="georgephoto.png"></img>

					<div className = "talk-bubble tri-right left-top round">

						<div className = "chatbubble">
							<p>Why the fuck do people use this group me shit</p>
						</div>

					</div>

				</span>
			</div>
		);
	},

});

module.exports = ChatMessage;
