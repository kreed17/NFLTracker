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
                            header1='Passing'
                            header2='YDS'
                            category='PassingYards'
                            multiply={2.976190}
                            fetchURL={requests.qbapi}
                            />
                       <StatsData
                            header1='Rushing'
                            header2='YDS'
                            category='RushingYards'
                            multiply={1.805047}
                            fetchURL={requests.rbapi}
                            />
                        <StatsData
                            header1='Receiving'
                            header2='YDS'
                            category='ReceivingYards'
                            multiply={0.86730912}
                            fetchURL={requests.wrapi}
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
                            header1='Tackles'
                            header2='TOT'
                            category='Tackles'
                            multiply={2.75964392}
                            fetchURL={requests.tackles}
                        />

                        <StatsData
                            header1='Sacks'
                            header2='Sack'
                            category='Sacks'
                            multiply={8.07692308}
                            fetchURL={requests.sacks}
                        />
                        <StatsData
                            header1='Interceptions'
                            header2='INT'
                            category='Interceptions'
                            multiply={.8045977}
                            fetchURL={requests.interceptions}
                        />
                        
                        
                    </div>
            </div>            
            </div>            
        </div>
        
    )
}

export default Stats
