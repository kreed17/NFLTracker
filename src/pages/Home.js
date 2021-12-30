import React, { useState,useEffect } from 'react'
import axios from 'axios';
import '../css/Home.css';
import Sidebar from '../components/SideBar';
import teamLogos from '../teamLogos';
import { currentWK } from '../requests';
const baseUrl = 'https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2021?key=ac9077438d854c1b9fc9d9688345b7cd';


function Home() {
    const [schedule,setSchedule] =useState([])
    let currWeek = '';

    const currentWK = () => {        
        axios.get('https://api.sportsdata.io/v3/nfl/scores/json/CurrentWeek?key=ac9077438d854c1b9fc9d9688345b7cd')
            .then(res => {
                //console.log(res.data);
                 currWeek = res.data
            })       
    }
currentWK()

    useEffect(() => {
        axios.get(baseUrl)
        .then((response) => {
            const scheduleData = response.data.filter(data => data.Week===currWeek);
            setSchedule(scheduleData)
        })
    }, [])
    console.log(currWeek);
    function gameDate(date) {
        const newDate = new Date(date);
        var hour = newDate.getHours() - 1
        var minute = newDate.getMinutes();
        var amPM = (hour > 11) ? "pm" : "am";

        if(hour > 12) {
            hour -= 12;
          } else if(hour === 0) {
            hour = "12";
          }
          if(minute < 10) {
            minute = "0" + minute;
        }
        const time=  hour + ":" + minute + amPM;
        const day =`${newDate.getMonth()+1}/${newDate.getDate()} @ ${time} `
        return day
}

    return (
        <div className='home-container'>
            <div className='standings'>           
                <div className="sidenav">
                    <Sidebar key={1} title='NFC Standings' side='NFC'  />
                    <Sidebar key={2}title='AFC Standings' side='AFC' />
                    <Sidebar key={3}title='League Leaders'  />
                    <Sidebar key={4} title='Contact'  />

                </div>
                   
            </div>
            <div className='schedule-header'>Week {currWeek}Schedule</div>
                <ul className='schedule'>
                {schedule.filter(data =>data.AwayTeam !== "BYE")
                    .map((data ,index)=> <li key={index}>
                        <img className='logo' src={teamLogos(data.HomeTeam)} alt='' /> {data.HomeTeam} vs
                        <img className='logo' src={teamLogos(data.AwayTeam)} alt='' /> {data.AwayTeam}&nbsp; {gameDate(data.DateTime)}</li>)}
    
            </ul>
        </div>
    )
}

export default Home
