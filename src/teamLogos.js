
import './App.css'



const logos = {
ARI: 'Arizona-Cardinals',

ATL: 'Atlanta-Falcons',

BAL: 'Baltimore-Ravens',

BUF: 'Buffalo-Bills',

CAR: 'Carolina-Panthers',

CHI: 'Chicago-Bears',

CIN: 'Cincinnati-Bengals',

CLE: 'Cleveland-Browns',

DAL: 'Dallas-Cowboys',

DEN: 'Denver-Broncos',

DET: 'Detroit-Lions',

GB: 'Green-Bay-Packers',

HOU:'Houston-Texans',

IND: 'Indianapolis-Colts',

JAX: 'Jacksonville-Jaguars',

KC: 'Kansas-City-Chiefs',

MIA: 'Miami-Dolphins',

MIN: 'Minnesota-Vikings',

NE: 'New-England-Patriots',

NO: 'New-Orleans-Saints',

NYG: 'New-York-Giants',

NYJ: 'New-York-Jets',

LV: 'Oakland-Raiders',
    
PHI: 'Philadelphia-Eagles',

PIT: 'Pittsburgh-Steelers',

LAC: 'Los-Angeles-Chargers',

SEA: 'Seattle-Seahawks',

SF: '49ers',

LAR: 'Los-Angeles-Rams',

TB: 'Tampa-Bay-Buccaneers',

TEN: 'Tennessee-Titans',

WAS: 'Washington-Redskins'
}
 
function teamLogos(team) {
    Object.filter = (obj, predicate) => 
    Object.fromEntries(Object.entries(obj).filter(predicate));

    var filtered = Object.filter(logos, ([key, value]) => key === team); 
    const img =Object.entries(filtered)[0][1]

    return `https://logotyp.us/files/${img.toLowerCase()}.svg`
    
}
export default teamLogos;