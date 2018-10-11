import React, {Component, Fragment} from 'react'

import "./Cloud.css"

class Cloud extends Component{
	render(){
		const cloud = {
			overflow:'hidden',
			position :'absolute',
			width: 150 * this.props.size + 'px',
			height: 150 * this.props.size + 'px',
			top:this.props.position.top + "%",
			left:this.props.position.left + "%"
		}
		return (
				<img style={cloud} className='animated rubberBand infinite' src={this.props.img} alt="Responsive cloud"/>
		)
	}
}


export default Cloud