import React, { useState, useEffect } from 'react'
import fetchAxios from '../axios'
import axios from 'axios'
import teamLogos from '../teamLogos';


import '../css/StatsData.css'



// `https://api.sportsdata.io/v3/nfl/stats/json/SeasonLeagueLeaders/2021/${props.position}/${props.category}?key=ac9077438d854c1b9fc9d9688345b7cd`
//2.976 for passing yards


function StatsData({fetchURL,category,header1,header2,multiply,type}) {
    const [stats,setStats] =useState([])
    const [players, setPlayer] = useState([])

    useEffect(() => {
        async function fetchData() {
            let request = null;
            if (type === 'team') {
                request = await axios.get(fetchURL);
                console.log(request);
                setStats(request.data.sort(function (a, b) {
                    return (category === 'OpponentOffensiveYards') ? (a[category] / a.Games) - (b[category] / b.Games) :
                        (b[category] / b.Games) - (a[category] / a.Games) 
                
                }))
            } else {
                request = await fetchAxios.get(fetchURL);
            }
            setStats(request.data)
            return request;            
        }
        fetchData();
      }, [fetchURL]);

    
    
    function roundHalf(num,player) {
        if (header2[4] === 'G') {
            return Math.round((num / player.Games)* 10) / 10 
        } else if (header2[0]==='D'){
                return Math.round(num)
        }else  {
            return Math.round(num * 2) / 2;
        }
    }


    function getInfo(player,index) {
        if (type === 'team') {

            return (
                <tr>
                    <td className='name'> {index + 1}.
                        <img className='team_logo' src={teamLogos(player.Team)} alt="" />
                         {player.TeamName}</td>
                    <td className='data'>{roundHalf((player[category] * multiply),player)}</td>
                </tr>
            )
        } else {
            return (<tr>
                    <td className='name'> {index + 1}. <span style={{fontSize:'10px'}}>{player.Team}</span> {player.Name}</td>
                    <td className='data'>{roundHalf(player[category] * multiply)}</td>
                </tr>
                )
        }
    }
    
 console.log(stats);
    return (
        <div >                 
            <table className='stats__table'>
                <tr>
                    <th>{header1}</th>
                    <th>{header2}</th>
                </tr>
                {stats.slice(0,5).map((player,index) => (                    
                        getInfo(player,index)                    
                    ))}
            </table>            
        </div>
    )
}

export default StatsData









