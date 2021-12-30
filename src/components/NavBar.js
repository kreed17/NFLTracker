import React from 'react'
import '../css/NavBar.css'

function NavBar() {
    return (
    <div className="topnav">
            <a className="brand" href="/">TIMEOUT</a>
            <img className='nfl-logo' src="http://loodibee.com/wp-content/uploads/nfl-league-logo-300x300.png"  alt="NFL Logo" />
        <a href="/stats">Stats</a>
        <a href="/scores">Scores</a>
        <a className='active'href="/">Home</a>
    </div>
       
    )
}

export default NavBar;
