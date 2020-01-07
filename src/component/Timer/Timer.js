import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props) {
		super(props)
		this.state = {
			time: 0,
			isOn: false,
			showButton: true
		}
		this.handlerTimer = this.handlerTimer.bind(this)
	}

	_startTimer() {
		return setInterval(() => this.setState(state => ({
			time: state.time + 1,
			isOn: state.isOn
		})), 1000)
	}

	handlerTimer() {
		this.setState(state => ({
			time: state.time,
			isOn: !state.isOn
		}))

		if (this.state.isOn) {
			clearInterval(this.timer)
		} else {
			this.timer = this._startTimer()
		}
	}

	render() {
		return (
			<div>
                {this.state.isOn 
                ? <button className="counter-button" onClick={this.handlerTimer} style={{width:30,height:15,fontSize:10}} >Stop</button> 
                : <button className="counter-button"  onClick={this.handlerTimer} style={{width:30,height:15,fontSize:10}} >Run</button>}
				<h3 className="timer-color" style={{fontSize:10}}>timer: {this.state.time}</h3>

			</div>
		)
	}
}
