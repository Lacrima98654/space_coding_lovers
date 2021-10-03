import React from 'react'
import {Link} from 'react-router-dom'

class Menu extends React.Component{
    render() {
        return (
            <div className='container d-flex flex-column menu'>
                <div >
                    <Link to='/space_coding_lovers/quiz'>Play</Link>
                </div>
                <div>
                    <Link to='/space_coding_lovers/help'>Help</Link>
                </div> 
                <div>
                    <Link to='/space_coding_lovers/about'>About</Link>
                </div> 
            </div>
        )
    }
}
export default Menu;