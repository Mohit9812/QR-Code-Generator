import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import back1 from '../../asset/img/backgrounds/back1.png';
import back2 from '../../asset/img/backgrounds/back2.png';
import back3 from '../../asset/img/backgrounds/back3.png';
import back4 from '../../asset/img/backgrounds/back4.png';
import back5 from '../../asset/img/backgrounds/back5.png';
import AppContext from '../AppContext';
// import template6 from '../../asset/img/template/template6.png';
import './templatemenu.css';

function Templatemenu(props) {
  const show = props.show;
  const myContext = useContext(AppContext)

  const handleChange = (selected) => {
    if(myContext.bg === selected){
      myContext.setBack(0)
    }
    else{
      myContext.setBack(selected)
    }
  }

  if(show){
  return (
    <div className='maain'>
        <div className='head'>
            Choose a background
        </div>
        <div className='tempt'>
            <img src={back1} alt='t1' onClick={()=>handleChange(1)}/>
            <img src={back2} alt='t2' onClick={()=>handleChange(2)}/>
            <img src={back3} alt='t3' onClick={()=>handleChange(3)}/>
            <img src={back4} alt='t4' onClick={()=>handleChange(4)}/>
            <img src={back5} alt='t5' onClick={()=>handleChange(5)}/>
            {/* <img src={template6} alt='t6'/> */}
        </div>
    </div>
  )
  }
}

export default Templatemenu;