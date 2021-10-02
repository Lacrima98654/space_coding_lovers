import React from 'react'
import {Link} from 'react-router-dom'

class Menu extends React.Component{
    render() {
        return (
            <div>
                <Link to='/space_coding_lovers/quiz'>Quiz</Link><br/>
                <Link to='/space_coding_lovers/puzzle'>Puzzle</Link>
            </div>
        )
    }
}
export default Menu;