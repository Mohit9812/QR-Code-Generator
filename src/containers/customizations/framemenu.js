import React from 'react';
import './datamenu.css';
import fnone from '../../asset/img/frame/fnone.png';
import circular from '../../asset/img/frame/circular.png';
import boxbottom from '../../asset/img/frame/boxbottom.png';
import ballonbottom from '../../asset/img/frame/ballonbottom.png';

function Framemenu(props) {
    const show = props.show;
    if(show){
    return (
        <div className='main'>
            <div className='head'>
                Choose a Frame
            </div>
            <div className='temp'>
                <img src={fnone} alt='t1'/>
                <img src={circular} alt='t2'/>
                <img src={boxbottom} alt='t3'/>
                <img src={ballonbottom} alt='t4'/>
            </div>
        </div>
    )
    }
}
export default Framemenu;