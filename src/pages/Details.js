import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import {useState} from 'react';
import data from "./ressource";

function Details(){
    const [redirect, setRedirect] = useState(false);
    const handleClick = () => {
        //On verifie si la progression existait sinon on la crée en lui ajoutant 0
        let actualLevel = parseInt(localStorage.getItem('progress')?localStorage.getItem('progress'):!localStorage.setItem('progress','0')?0:0);
        //On vérifie si en incrémentant le prochain niveau ce sera en dehors du tableau
        actualLevel += ((actualLevel + 1)> data.length - 1) ? 0:1;
        localStorage.setItem('progress',actualLevel+'');
        setRedirect(true);
    }
    return(
        <div className="container pt-3">
            {redirect && <Redirect to='/space_coding_lovers/quiz'/>}
            <p className="lead">
                Plus de détail sur la notion.
            </p>
            <button type="button" className='btn btn-dark' onClick={handleClick}>Continue</button>
        </div>
    );
}
export default Details;