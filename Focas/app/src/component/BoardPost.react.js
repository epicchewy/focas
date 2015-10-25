var React = require('react');

var BoardPost = React.createClass({
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
<div className = "boardpost">
			<div className = "poster">
				<img src="C:/Users/Ryan/Desktop/squad%20sample%20website/images/wesphoto.png"></img>


				<div className = "name">
					<a>Wesley Woo</a>
				</div>


				<div className = "datetime">
					<a>5:35pm 5/25</a>
				</div>
			</div>
		<div className = "talk-bubble3 tri-right btm-right-in round">

<div className = "chatbubble">

<p>Hey guys, my house is open this weekend and I'm gonna throw. Who can go and who should we invite?</p>

</div>
</div>
</div>
	

		);
	},

});

module.exports = BoardPost;
