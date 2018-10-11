import React, {Component, Fragment} from 'react'

import "./Thing.css"

class Thing extends Component{
	render(){
		const thing = {
			position:'absolute',
			overflow:'hidden',
			height:100 * this.props.size +'px',
			width:100 * this.props.size+'px',
			top : this.props.position.top + "%",
			left : this.props.position.left + "%",
			zIndex :this.props.z
		}
		return (
			<Fragment>
				<img style={thing} className={'animated '+ this.props.anim + ' infinite'} src={this.props.img} alt="Responsive person"/> 
				{this.props.children}
			</Fragment>
			)
	}
}


export default Thing