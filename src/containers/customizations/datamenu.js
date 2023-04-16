import React from 'react';
import './datamenu.css';
import kite from '../../asset/img/data/kite.png';
import round from '../../asset/img/data/round.png';
import square from '../../asset/img/data/square.png';
import rightdiamond from '../../asset/img/data/right-diamond.png';

function Datamenu(props) {
  const show = props.show;
  if(show){
  return (
    <div className='main'>
        <div className='head'>
            Data pattern
        </div>
        <div className='temp'>
            <img src={square} alt='t1'/>
            <img src={kite} alt='t2'/>
            <img src={round} alt='t3'/>
            <img src={rightdiamond} alt='t4'/>
        </div>
    </div>
  )
  }
}

export default Datamenu;