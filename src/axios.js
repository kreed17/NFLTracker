
import axios from "axios";

//make request to base url


const instance = axios.create({
    baseURL: 'https://api.sportsdata.io/v3/nfl/stats/json/SeasonLeagueLeaders/2021'
});

export default instance;
