import React from 'react'
import {Redirect} from 'react-router-dom'

class Acceuil extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
        this.wait = 10;//Temps de chargement du jeu en secondes
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
        //Supprimer le compteur de temps
        if(this.state.count >= this.wait) clearInterval(this.timeID);
        
        return(
            <div className="acceuil">
                {this.state.count >= this.wait ? <Redirect to="/space_coding_lovers/menu" />:null}
                <p id="welcome">
                    WELCOME ON SPACE QUEST GAME
                </p>
                <div id="progressBar">
                    <div id="progressBarFull"/>
                </div>
            </div>
        )
    }
}

export default Acceuil;