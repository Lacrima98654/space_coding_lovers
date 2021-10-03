import React from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import fusee from '../fusee.min.png'
import data from './ressource';

const Status = ({type}) =>{
  let res = type===1?"Good answer":type===0?"Bad answer":"Time Out";
  let alert = type===1?"alert-success":"alert-danger";
  return(
    <React.Fragment>
      {type !== null &&
      <div className={`alert ${alert} position-fixed`} role="alert">
        {res}
      </div>
      }
    </React.Fragment>
  );
}

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
          seconde:30,
          progress: localStorage.getItem('progress')?localStorage.getItem('progress'):0,
          possible: [...shuffle(data[localStorage.getItem('progress')?localStorage.getItem('progress'):0].possible)],
          redirection : false,
          statut : null
        }
      }
    componentDidMount(){
        //Le Le décompteur des 30s
        this.timerID = setInterval(() => 
        this.setState(({seconde}) => ({seconde:seconde-1})),
        1000);
        
    }
    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    handleClick(e)
    {
      if(this.state.statut === null){
        let click = e.target.innerHTML.slice(5);
        if(click === data[this.state.progress].answer)
          this.setState({statut:1});
        else
          this.setState({statut:0});
        setTimeout(() => {
                  this.setState({redirection:true});
                }, 1500);
      }
    }
    render(){
        if(!this.state.seconde) {
          clearInterval(this.timerID);
          this.fusee = document.getElementById('fuseeID');

          //Décollage de la fusée après les 30s
          this.timerID = setInterval(() => {
            let pos = parseInt(getComputedStyle(this.fusee).top);
            pos -= 2;
            this.fusee.style.top = pos+"px";

            //Si l'élément disparait de l'écran
            if(pos <= -1*this.fusee.width) {
              clearInterval(this.timerID);
              
              //Gestion de la redirection
              if(this.state.statut === null){
              setTimeout(() => {
                 this.setState({redirection:true});
              }, 1500);

              //Afficher que le temps est passé mais il faut vérifier
              this.setState({statut:2});
            }
            }
          },10);
        }
        return(
          <React.Fragment> 
            {this.state.redirection?<Redirect to={`/space_coding_lovers/details/${this.state.progress}`} />:null}
            <div className='pageQuiz'>
            <Status type={this.state.statut}/>
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
                      {data[this.state.progress].question}
                      <br/><br/>
                    </p>
                    </td>
                </tr>
                <tr>
                  <td>
                    <p className="answer" onClick={this.handleClick.bind(this)}>A<br/>
                    {this.state.possible[0]}
                    </p>
                  </td>
                  <td>
                    <p className="answer" onClick={this.handleClick.bind(this)}>B<br/>
                    {this.state.possible[1]}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="answer" onClick={this.handleClick.bind(this)}>C<br/>
                    {this.state.possible[2]}
                    </p>
                  </td>
                  <td>
                    <p className="answer" onClick={this.handleClick.bind(this)}>D<br/>
                    {this.state.possible[3]}
                    </p>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            
              <img src={fusee} alt='fusee' className='fuseeContain' id="fuseeID"/>
          </div>
          </React.Fragment> 
        );
    }
}

//Other functions
function shuffle(arr) {
	const {random, floor} = Math;
	for (let i = 0, j; i< arr.length; i++) {
		j = floor(random()*arr.length);
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
};

export default Quiz;