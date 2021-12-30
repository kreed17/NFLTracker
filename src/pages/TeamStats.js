import React from 'react'

import StatsData from '../components/StatsData';
import '../css/Stats.css'
import requests from '../requests'

function Stats() {
    
    return (
        <div className='page-container'>
        <div className='stats-header'>
            <h1>NFL Stat Leaders 2021</h1>
            </div>
            <div className='header-container'>
                <div className='stats-container'>
                    <div className='player-team-header active'>
                    <a href="/stats">
                        <h3 >Player</h3>
                    </a>
                    </div>
                    <div className='leaders'>
                        <h5>Offensive Leaders  </h5>
                        <StatsData
                            header1='Points'
                            header2='PTS/G'
                            category='Score'
                            multiply={1}
                            fetchURL={requests.team}
                            type='team'
                            />
                       <StatsData
                            header1='Passing'
                            header2='YDS/G'
                            category='PassingYards'
                            multiply={.69066148}
                            fetchURL={requests.team}
                            type='team'

                            />
                        <StatsData
                            header1='Rushing'
                            header2='YDS/G'
                            category='RushingYards'
                            multiply={.69073705}
                            fetchURL={requests.team}
                            type='team'
                            />

                </div>    
            </div>
            <div className='stats-container'>
                <div className='player-team-header '>
                        <a href="/stats/team">
                        <h3 >Team</h3>
                    </a>
                    </div>
                    
            <div className='leaders'>
                        <h5>Defensive Leaders  </h5>
                        <StatsData
                            header1='Yards Allowed'
                            header2='YDS/G'
                            category='OpponentOffensiveYards'
                            multiply={.690695}
                            fetchURL={requests.team}
                            type='team'
                        />

                        <StatsData
                            header1='Sacks'
                            header2='Sack'
                            category='Sacks'
                            multiply={.68292683}
                            fetchURL={requests.team}
                            type='team'

                        />
                        <StatsData
                            header1='Turnovers'
                            header2='DIFF'
                            category='TurnoverDifferential'
                            multiply={.7}
                            fetchURL={requests.team}
                            type='team'

                        />
                        
                        
                    </div>
            </div>            
            </div>            
        </div>
        
    )
}

export default Stats
