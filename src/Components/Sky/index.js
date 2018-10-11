import React, {Component, Fragment} from 'react'

import './Sky.css'

class Sky extends Component{
	constructor(props){
		super(props)
		this.state ={
			offset: 1
		}
		this.handleAnimate = this.handleAnimate.bind(this) 
		setInterval(this.handleAnimate,1000/this.props.fps)
	}

	handleAnimate(){
		this.setState((prev,props) => ({
			offset: (prev.offset + 2)
		}))
	}
	render(){
		const sky = {
			overflow:'hidden',
			position:'relative',
			width:'100%',
			height:'40%',
			background:'linear-gradient(rgba(200,200,200,0.4),rgba(20,20,26,0.6)) ,url(' + this.props.img + ') ',
			backgroundPosition: this.state.offset +'px 450%',
		}
		return (
			<div style={sky}> 
				{this.props.children}
			</div>
			)
	}
}


export default Sky