import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            time: 0
        }
        
        console.log('constructor called')
    }
    
    componentDidMount () {
        console.log('component created')
        setInterval(() => {
            this.incrementTimer()
        }, 1000)
    }//a komponens életciklusának a legeslegelső pillanata

    componentDidUpdate () {
        console.log('something changed')
    }

    componentWillUnmount () {
        console.log('we did a change')
    }
    //a komponensre már nincs szükség --> meg fog szűnni
    // itt kell felszabadítani azokat a dolgokat, amikre már nem lesz szükség, ha megszűnik a komponens (pl a számlálónk vagy egy fetch)

    incrementTimer () {
        this.setState({
            time: this.state.time+1
        })
    }

    render () {
        console.log('render done')
        return(
            <>
                <div className={(this.state.time >= 5) ? 'blue' : ''}>
                    {this.state.time}
                </div>
                <button onClick={() => {this.incrementTimer()}}>Click me</button>
            </> 
        )
    }
}

export default Timer