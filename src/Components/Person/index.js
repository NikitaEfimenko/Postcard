import React, {Component, Fragment} from 'react'

import "./Person.css"

class Person extends Component{
	constructor(props){
		super(props)
		this.state = {
			dx:0,
			curFrame:0
		}
		this.getImage = this.getImage.bind(this);
		this.nextFrame = this.nextFrame.bind(this);
		setInterval(this.nextFrame, 1000/this.props.fps);
	}
	nextFrame(){
			this.setState((prev, props) => ({
				curFrame: (prev.curFrame + 1) % 2,
				dx: 180 * ((prev.curFrame + 1) % 2),
			}));
	} 
	getImage(){
		const {dx} = this.state;
		return {
			position:'absolute',
			left:0,
			cursor :'pointer',
			top:0,
			transform: "translate( -"+ dx +"px,0px )"
		}
	}
	soundHandler(){
		let myAudio = new Audio(this.props.clkSound); 
		myAudio.play();
	}
	render(){
		const person = {
			display:'flex',
			position:'relative',
			overflow:'hidden',
			height:180 + 'px',
			width:180 + 'px',
			justifyContent:'center',
			alignItems:'center',
			zIndex:1
		}
		return (
			<div className={'animated ' + this.props.anim + ' infinite'} onClick={this.soundHandler.bind(this)} style={person}> 
				<img src={this.props.img} style={this.getImage()}  alt="Responsive person"/> 
			</div>
			)
	}
}


export default Person