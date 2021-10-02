import React from 'react'
import fusee from '../fusee.min.png'

function Timer({seconde})
{
  return(
    <span className={`${seconde<=10?"time-out":null}`}>00:{(seconde+'').length === 1 ?'0'+seconde:seconde}</span>
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
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    
    render(){
        if(!this.state.seconde) clearInterval(this.timerID);
        return(
          <React.Fragment> 
            <div className='pageQuiz'>
            
            <div className='container pt-3 Quiz position-ralative'>
              
              <table className='questionnaire'>
                <tbody>
                <tr>
                  <td colSpan='2'>
                  <Timer seconde={this.state.seconde}/>
                  </td>
                </tr>
                <tr>
                  <td colSpan='2'>
                    <p className='quiz'>
                      Question<br/>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sapiente beatae voluptates rem, at dignissimos. Accusantium quaerat soluta dolores ut commodi? Illo corrupti tempora ab nulla placeat obcaecati quam inventore.
                    </p>
                    </td>
                </tr>
                <tr>
                  <td>
                    <p className="answer">A<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui totam modi, quibusdam blanditiis eveniet non, atque cumque.</p>
                  </td>
                  <td>
                    <p className="answer">B<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui totam modi, quibusdam blanditiis eveniet non, atque cumque.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="answer">C<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui totam modi, quibusdam blanditiis eveniet non, atque cumque.</p>
                  </td>
                  <td>
                    <p className="answer">D<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui totam modi, quibusdam blanditiis eveniet non, atque cumque.</p>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            
              <img src={fusee} alt='fusee' className='fuseeContain'/>
            
          </div>
          </React.Fragment> 
        );
    }
}

export default Quiz;