import React, {useState} from 'react'
import square from '../../asset/img/eye/square.png';
import circle from '../../asset/img/eye/circle.png';
import roundeddiamond from '../../asset/img/eye/roundeddiamond.png';
import roundedleaf1 from '../../asset/img/eye/roundedleaf1.png';
import leftLeafrounded from '../../asset/img/eye/leftLeafrounded.png';
import squarerightdiamond from '../../asset/img/eye/squarerightdiamond.png';
import './eyemenu.css';


function Eyemenu(props) {
    const show = props.show
    const [value1, setValue1] = useState('#123456');
    const handleChange = () => {
        setValue1(document.getElementById('myColor').value)
    }
    if(show){
    return (
        <div className='maiin'>
            <div className='head'>
                    Eye color
            </div>
            <div className='picker'>
                <div className='pickertoast'>
                    <label>{value1}</label>
                    <input id='myColor' type={'color'} value={value1} onChange={handleChange}/>
                </div>
            </div>
            <div className='head'>
                    Eye style
            </div>
            <div className='tempo'>
                <img src={square} alt='t1'/>
                <img src={roundeddiamond} alt='t2'/>
                <img src={circle} alt='t3'/>
                <img src={leftLeafrounded} alt='t4'/>
                <img src={squarerightdiamond} alt='t5'/>
                <img src={roundedleaf1} alt='t6'/>
            </div>
        </div>
    )
    }
}

export default Eyemenu