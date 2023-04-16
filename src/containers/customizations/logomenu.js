import React, { useContext, useState } from 'react'
import { Card } from 'react-bootstrap'
import { BsFillCaretDownFill } from 'react-icons/bs'
import './logomenu.css'
import AppContext from '../AppContext'
import 'bootstrap/dist/css/bootstrap.min.css';



function Logomenu(props) {
    // const [logoid, setLogoid] = useState(0);
    const myContext = useContext(AppContext)

    const handleLogo = (selected) => {
        // if(selected === 1){
        //     myContext.setSelectedLogo('logob')
        //   }
        //   else if(selected === 2){
        //     myContext.setSelectedLogo('logof')
        //   }
        //   else if(selected === 3){
        //     myContext.setSelectedLogo('logot')
        //   }
        if(myContext.logoVal === selected){
            myContext.setSelectedLogo(0);
        }
        else{
        myContext.setSelectedLogo(selected);
        }
    }

    if(props.show){
    return (
        <div>
            <Card>
                <Card.Body className='gallerydrp'>
                    <Card.Title className='titlel'>Select from gallery</Card.Title>
                </Card.Body>
                <div className='logos'>
                    <img src='https://static.beaconstac.com/assets/img/qrcg-img/logo-beaconstac.png' alt='abc' onClick={() => handleLogo(1)}/>
                    <img src='https://static.beaconstac.com/assets/img/qrcg-img/logo-facebook.jpg' alt='abc' onClick={() => handleLogo(2)}/>
                    <img src='https://static.beaconstac.com/assets/img/qrcg-img/logo-twitter.png' alt='abc' onClick={() => handleLogo(3)}/>
                    <img src='https://static.beaconstac.com/assets/img/qrcg-img/logo-whatsapp.png' alt='abc' onClick={() => handleLogo(4)}/>
                    <img src='https://static.beaconstac.com/assets/img/qrcg-img/logo-instagram.png' alt='abc' onClick={() => handleLogo(5)}/>
                    <img src='https://static.beaconstac.com/assets/img/qrcg-img/logo-linkedin.png' alt='abc' onClick={() => handleLogo(6)}/>
                    <img src='https://static.beaconstac.com/assets/img/qrcg-img/logo-app-store.png' alt='abc' onClick={() => handleLogo(7)}/>
                    <img src='https://static.beaconstac.com/assets/img/qrcg-img/logo-play-store.png' alt='abc' onClick={() => handleLogo(8)}/>
                    <img src='https://static.beaconstac.com/assets/img/qrcg-img/logo-calendar.png' alt='abc' onClick={() => handleLogo(9)}/>
                    <img src='https://static.beaconstac.com/assets/img/qrcg-img/logo-pdf.png' alt='abc' onClick={() => handleLogo(10)}/>
                    <img src='https://static.beaconstac.com/assets/img/qrcg-img/logo-food.png' alt='abc' onClick={() => handleLogo(11)}/>
                    <img src='https://static.beaconstac.com/assets/img/qrcg-img/logo-youtube.png' alt='abc' onClick={() => handleLogo(12)}/>
                    <img src='https://static.beaconstac.com/assets/img/qrcg-img/logo-pinterest.png' alt='abc' onClick={() => handleLogo(13)}/>
                    <img src='https://static.beaconstac.com/assets/img/qrcg-img/logo-shop.png' alt='abc' onClick={() => handleLogo(14)}/>
                    <img src='https://static.beaconstac.com/assets/img/qrcg-img/logo-paypal.png' alt='abc' onClick={() => handleLogo(15)}/>
                </div>
            </Card>
        </div>
    )
    }
}

export default Logomenu