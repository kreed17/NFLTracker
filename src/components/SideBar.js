import {React ,useEffect,useState} from 'react'
import {  Modal } from 'react-bootstrap';
import axios from 'axios';
import react from 'react'

import '../css/SideBar.css'

const standingsUrl='https://api.sportsdata.io/v3/nfl/scores/json/Standings/2021?key=ac9077438d854c1b9fc9d9688345b7cd'
function Sidebar(props) {
   
    const [show, setShow] = useState(false);      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [activeModal, setModal] = useState([]);

    useEffect(() => {
        axios.get(standingsUrl)
        .then((response) => {
            const standingsData = response.data.filter(data => data.Conference=== props.side);
            setModal(standingsData)
           // console.log(standingsData)
        })

    }, [])
    
    const tablerow = () => {
        const tmp = [];
       // console.log(activeModal)

        for (let i = 0; i < activeModal.length; i++){
           activeModal.sort((a, b) => parseFloat(b.Percentage) - parseFloat(a.Percentage));
            tmp.push(
                <tbody>
                <tr className='standings_row'>
                        <th>{i + 1}. {activeModal[i].Name}</th>
                        <th>{activeModal[i].Wins}</th>
                        <th>{activeModal[i].Losses}</th>
                        <th>{activeModal[i].Ties}</th>
                </tr>
                </tbody>    )
        } return tmp;
    }
      
    return (

        <>
            <div className='sidebar'>
            <h3 onClick={handleShow}>{props.title}</h3>
            
            <Modal show={show} scrollable onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-table'>
                        <table className='table-standings'>
                            <tr>
                                <th>Team</th>
                                <th>W</th>
                                <th>L</th>
                                <th>T</th>
                            </tr>
                                         
                              {tablerow()}                                                   
                         </table>   
                </Modal.Body>                
            </Modal>
            </div>
            
        </>
    );
}
      
      

export default Sidebar


