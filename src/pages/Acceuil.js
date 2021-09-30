import React from 'react'
import {Redirect} from 'react-router-dom'

class Acceuil extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
        this.wait = 10;
    }
    componentDidMount() {
        const f = document.getElementById('progressBarFull');
        this.timeID = setInterval(() =>
        {
            this.setState(({count}) => ({count:count + 1}));
            f.style.width = `${(this.state.count/this.wait)*100}%`;
                
        },1000);
    }
    
    render() {
        if(this.state.count >= this.wait)
            clearInterval(this.timeID)
        return (
            <div className="acceuil">
            {this.state.count >= this.wait ? <Redirect to="/menu" />:null}
                <div id="progressBar">
                    <div id="progressBarFull">

                    </div>
                </div>
                <p id="welcome">
                    WELCOME ON SPACE QUEST GAME
                </p>
            </div>
        )
    }
}

export default Acceuil;