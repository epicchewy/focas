var React = require('react');

var ChatMessage2 = React.createClass({
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
			<div className = "posterinfo2">
				<span>

					<div className = "talk-bubble2 tri-right right-top round">

						<div className = "chatbubble">
							<p>Why the fuck do people use this group me shit</p>
						</div>

					</div>

				</span>
			</div>
		);
	},

});

module.exports = ChatMessage2;
