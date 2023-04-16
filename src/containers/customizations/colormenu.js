import React, { useContext, useState } from 'react'
import AppContext from '../AppContext';
import './colormenu.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Colormenu(props) {
    const show = props.show;
    const myContext = useContext(AppContext)

    const handleChange = () => {
        myContext.setValue1(document.getElementById('myColor').value)
        myContext.setValue2(document.getElementById('myColor1').value)
        myContext.setValue3(document.getElementById('myColor2').value)
    }
    if(show){
    return (
        <div className='maiin'>
            <div className='head'>
                Pattern color
            </div>
            <div className='picker'>
                <div className='pickertoast'>
                    <label>{myContext.color1}</label>
                    <input id='myColor' type={'color'} value={myContext.color1} onChange={handleChange}/>
                </div>
                <div className='pickertoast'>
                    <label>{myContext.color2}</label>
                    <input id='myColor1' type={'color'} value={myContext.color2} onChange={handleChange}/>
                </div>
            </div>
            <div className='head'>
                Background color
            </div>
            <div className='picker'>
                <div className='pickertoast'>
                    <label>{myContext.color3}</label>
                    <input id='myColor2' type={'color'} value={myContext.color3} onChange={handleChange}/>
                </div>
            </div>
        </div>
    )
    }
}

export default Colormenu