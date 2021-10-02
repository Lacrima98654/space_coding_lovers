import React from 'react'
import {Link} from 'react-router-dom'

class Menu extends React.Component{
    render() {
        return (
            <div className='container d-flex flex-column justify-content-center menu align-items-between menu'>
                <button className='btn'>
                    <Link to='/space_coding_lovers/quiz'>Quiz</Link>
                </button>
                <button className='btn btn-primary'>
                    <Link to='/space_coding_lovers/puzzle'>Puzzle</Link>
                </button>
               
               
            </div>
        )
    }
}
export default Menu;