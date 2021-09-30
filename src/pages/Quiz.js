import React from 'react'
import fusee from '../fusee.png'

function Timer({seconde})
{
  return(
    <div>
      <span>00:{(seconde+'').length === 1 ?'0'+seconde:seconde}</span>
    </div>
  )
}

class Quiz extends React.Component{
    constructor(){
        super();
        this.state = {
          seconde:30
        }
      }
    componentDidMount(){
        this.timerID = setInterval(() => 
        this.setState(({seconde}) => ({seconde:seconde-1})),
        1000);
    }
    render() {
        if(!this.state.seconde) clearInterval(this.timerID);
        return (
            <div>
                <div>
                    <img src={fusee} alt='fusee'/>
                    <Timer seconde={this.state.seconde}/>
                </div>
            </div>
        )
    }
}

export default Quiz;