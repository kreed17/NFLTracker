import axios from 'axios';

const requests = {
    qbapi : '/qb/PassingYards?key=ac9077438d854c1b9fc9d9688345b7cd',
    rbapi:'/rb/rushingyards?key=ac9077438d854c1b9fc9d9688345b7cd',
    wrapi: '/wr/ReceivingYards?key=ac9077438d854c1b9fc9d9688345b7cd',
    lbapi: '/lb/tackles?key=ac9077438d854c1b9fc9d9688345b7cd',
    deapi: '/de/sacks?key=ac9077438d854c1b9fc9d9688345b7cd',
    cbapi: '/cb/interceptions?key=ac9077438d854c1b9fc9d9688345b7cd',
    sacks: '/defense/sacks?key=ac9077438d854c1b9fc9d9688345b7cd',
    interceptions:'/defense/interceptions?key=ac9077438d854c1b9fc9d9688345b7cd' ,
    tackles:'/defense/tackles?key=ac9077438d854c1b9fc9d9688345b7cd',
    team: 'https://api.sportsdata.io/v3/nfl/scores/json/TeamSeasonStats/2021REG?key=ac9077438d854c1b9fc9d9688345b7cd'
}

export const currentWK = () => {
    let week =''
    axios.get('https://api.sportsdata.io/v3/nfl/scores/json/CurrentWeek?key=ac9077438d854c1b9fc9d9688345b7cd')
        .then(res => {
            console.log(res.data);
            week = res.data
        })
    return week
}

   
export default requests