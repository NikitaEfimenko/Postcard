import React, {Component, Fragment} from 'react'

import Sky from '../Sky'
import Ground from '../Ground'
import Person from '../Person'
import Cloud from '../Cloud'
import Thing from '../Thing'

import "./App.css"


class App extends Component{
	constructor(props){
		super(props)
		this.state = {

		}
		let myAudio = new Audio(this.props.backSound); 
		myAudio.addEventListener('ended', function() {
    	this.currentTime = 0;
    	this.play();
		}, false);
		myAudio.play();
	}
	render(){


		const cloud = './images/sky.png'
		const cloudM = './images/sky1.png'
		const el = './images/el.png'
		const elM = './images/el1.png'

		const sky = './images/sky.jpg'
		const ground = './images/ice.jpg'
		const person = './images/person.png'
		const sun = './images/sun.png'
		const ispolnenie = './sounds/1.mp3'


		return (
			<Fragment>
					<Sky fps={30} img={sky}>
					<Thing fps={2} position={{top:0, left:40}} size = {2.4} z={0} anim='tada' img={sun}>
		
					</Thing>
						<Cloud img={cloudM} position={{top:5, left:13}} size={0.6} fps={5}/>
						<Cloud img={cloud} position={{top:40, left:40}} size={0.8} fps={5}/>
						<Cloud img={cloudM} position={{top:25, left:20}} size={0.9} fps={5}/>
						<Cloud img={cloudM} position={{top:13, left:20}} size={0.4} fps={5}/>
						<Cloud img={cloud} position={{top:35, left:60}} size={1.2} fps={5}/>
						<Cloud img={cloud} position={{top:0, left:70}} size={1.3} fps={5}/>
						<Cloud img={cloudM} position={{top:40, left:3}} size={1.3} fps={5}/>
					</Sky>

					<Ground fps={25} img={ground}>
						<Person clkSound={ispolnenie}  fps={3} anim='tada' size ={2} img={person}/>
						<Thing fps={5} position={{top:3, left:20}} size = {0.4} z={0}  anim='tada' img={el}/>
						<Thing fps={5} position={{top:12, left:40}} size = {0.4} z={0}   anim='shake' img={elM}/>
						<Thing fps={5} position={{top:0, left:2}} size = {0.7} z={0}  anim='tada' img={el}/>
						<Thing fps={5} position={{top:4, left:50}} size = {0.7} z={0}  anim='pulse' img={elM}/>
						<Thing fps={5} position={{top:7, left:80}} size = {1.4} z={0}  anim='shake' img={el}/>
						<Thing fps={5} position={{top:20, left:20}} size = {1.9} z={0}  anim='shake' img={elM}/>
						<Thing fps={5} position={{top:27, left:2}} size = {1.9} z={0}  anim='pulse' img={el}/>
						<Thing fps={5} position={{top:25, left:90}} size = {1.7} z={2}  anim='pulse' img={elM}/>
						<Thing fps={5} position={{top:45, left:70}} size = {2.1} z={3}  anim='shake' img={el}/>
						<Thing fps={5} position={{top:55, left:20}} size = {2.4} z={3} anim='wobble' img={elM}/>
					</Ground>
			</Fragment>
		)
	}
}


export default App