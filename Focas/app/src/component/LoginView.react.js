var React = require('react');
// var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Modal = require('react-bootstrap/lib/Modal');
var ModalBody = require('react-bootstrap/lib/Modal');
var ModalHeader = require('react-bootstrap/lib/Modal');
var ModalFooter = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');

var LoginView = React.createClass({
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
			<div className = "loginModal">
				<Modal>
					<ModalHeader>test</ModalHeader>
					<ModalBody></ModalBody>
					<ModalFooter>
						<Button onClick = {this.login}>Login</Button>
						<Button onClick = {this.register}>Register</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
		
	},
	login: function(){

	},
	register: function(){

	}
});

module.exports = LoginView;