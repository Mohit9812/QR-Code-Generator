import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContext from '../AppContext'
import template1 from '../../asset/img/template/template1.png';
import template2 from '../../asset/img/template/template2.png';
import template3 from '../../asset/img/template/template3.png';
import './customtemps.css'

function Customtemps(props) {
    const myContext = useContext(AppContext);

    const handleChange = (selected) => {
        if(selected === 1){
            myContext.setBack(4)
            myContext.setSelectedLogo(8)
            myContext.setValue1('#000000')
            myContext.setValue2('#ffffff')
        }
        else if(selected === 2){
            myContext.setSelectedLogo(5)
            myContext.setValue1('#2957ff')
            myContext.setValue2('#ff7aa2')
            myContext.setBack(0)
        }
        else if(selected === 3){
            myContext.setSelectedLogo(4)
            myContext.setValue1('#0eb969')
            myContext.setValue2('#a1ea1a')
            myContext.setBack(0)
        }
    }
    if(props.show){
    return (
        <div className='maain'>
            <div className='head'>
                Choose a template
            </div>
            <div className='tempt'>
                <img src={template1} alt='t1' onClick={()=>handleChange(1)}/>
                <img src={template2} alt='t2' onClick={()=>handleChange(2)}/>
                <img src={template3} alt='t3' onClick={()=>handleChange(3)}/>
                {/* <img src={back4} alt='t4' onClick={()=>handleChange(4)}/>
                <img src={back5} alt='t5' onClick={()=>handleChange(5)}/> */}
                {/* <img src={template6} alt='t6'/> */}
            </div>
        </div>
    )
    }
}

export default Customtemps