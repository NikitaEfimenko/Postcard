import React, {Component, Fragment} from 'react'

import "./Ground.css"

class Ground extends Component{
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
	rende
	render(){
		const ground = {
			display : 'flex',
			justifyContent:'center',
			alignItems :'center',
			position: 'relative',
			width:'100%',
			height:'60%',
			background:' linear-gradient(rgba(50,50,56,0.6),rgba(200,200,200,0.7)) , url(' + this.props.img + ')',
			backgroundPosition: '60% ' + this.state.offset +'%',
		}
		return (
			<div style={ground}>
				{this.props.children}
			</div>
			)
	}
}


export default Ground