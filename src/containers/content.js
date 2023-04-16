import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './content.css';
import { useState, useEffect, useContext } from 'react';
import { BsFillCaretDownFill } from "react-icons/bs";
import { motion } from 'framer-motion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Templatemenu from './customizations/templatemenu.js';
import Datamenu from './customizations/datamenu.js';
import Framemenu from './customizations/framemenu';
import Colormenu from './customizations/colormenu';
import Eyemenu from './customizations/eyemenu';
import Logomenu from './customizations/logomenu';
import { AwesomeQRCode } from '@awesomeqr/react';
import cat from './cat.gif';
import {logob, logoapp, logocal, logof, logofood, logoi, logol, logopay, logopdf, logopin, logoplay, logoshop, logot, logow, logoyou} from '../asset/img/logos/index.js';
import { back1, back2, back3, back4, back5 } from '../asset/img/backgrounds/index.js';
import AppContext from './AppContext';
import Customtemps from './customizations/customtemps';


function Content(props) {
  const [toggle, setToggle] = useState(true);
  const [toggle1, setToggle1] = useState(false);
  const [selectedItem, setSelectedItem] = useState(1);
  const [urltext, setUrltext] = useState('');
  const myContext = useContext(AppContext)
  const dict = { 1 : logob, 2 : logof, 3 : logot, 4 : logow, 5 : logoi, 6 : logol, 7 : logoapp, 8 : logoplay, 9 : logocal, 10 : logopdf, 11 : logofood, 12 : logoyou, 13 : logopin, 14 : logoshop, 15 : logopay }
  const dict1 = { 1 : back1, 2 : back2, 3 : back3, 4 : back4, 5 : back5}

  const handleChange = () => {
    setUrltext(document.getElementById('givenInput').value)
  }

  // const [gifArrayBuffer, setGifArrayBuffer] = useState('')

  // useEffect(() => {
  //   (async () => {
  //     const arrayBuffer = await fetch(cat).then((res) => res.arrayBuffer())
  //     setGifArrayBuffer(arrayBuffer)
  //     //console.log('arrayBuffer', arrayBuffer)
  //   })()
  // }, [])

  return (
    <div className='container'>
      <div className='row'>
      <div className='col row-md-sm drps'>
        <motion.div transition={{layout:{duration : 0.45, type : 'spring'}}} layout className='drpdwn' style={{borderRadius:"1rem"}}>
          <Card>
            <motion.div className='cdrop' layout='position' onClick={()=>{setToggle(!toggle);setToggle1(toggle)}}>
              <Card.Body className='contentBox'>
                <Card.Title className='title'>Content</Card.Title>
                <BsFillCaretDownFill className='bsIcon'/>
              </Card.Body>
            </motion.div>
            {toggle && 
            <motion.div initial={{opacity:0}} animate={{opacity:1}}>
              <label>{props.label}</label>
              <input className='urlinp' id = 'givenInput' value={urltext} onChange={handleChange} placeholder={props.hint}/>
            </motion.div>}
          </Card>
        </motion.div>
        <motion.div transition={{layout:{duration : 0.45, type : 'spring'}}} layout className='drpdwn' style={{borderRadius:"1rem"}}>
          <Card>
            <motion.div className='cdrop' layout='position' onClick={()=>{setToggle1(!toggle1);setToggle(toggle1)}}>
              <Card.Body className='contentBox'>
                <Card.Title className='title'>Customization</Card.Title>
                <BsFillCaretDownFill className='bsIcon'/>
              </Card.Body>
            </motion.div>
            {toggle1 && 
            <motion.div initial={{opacity:0}} animate={{opacity:1}}>
              <div className='custommenu'>
                <Button variant='primary' onClick={()=>setSelectedItem(1)}>Background</Button>
                <Button variant='primary' onClick={()=>setSelectedItem(2)}>Logo</Button>
                <Button variant='primary' onClick={()=>setSelectedItem(3)}>Color</Button>
                <Button variant='primary' onClick={()=>setSelectedItem(4)}>Template</Button>
                {/* <Button variant='primary' onClick={()=>setSelectedItem(4)}>Eyes</Button>
                <Button variant='primary' onClick={()=>setSelectedItem(5)}>Data</Button>
                <Button variant='primary' onClick={()=>setSelectedItem(6)}>Frames</Button> */}
              </div>
              <Templatemenu show={(selectedItem === 1)}/>
              <Logomenu show={(selectedItem === 2)}/>
              <Colormenu show={(selectedItem === 3)}/>
              <Customtemps show={(selectedItem === 4)}/>
              {/* <Datamenu show={(selectedItem === 5)}/>
              <Framemenu show={(selectedItem === 6)}/> */}
            </motion.div>}
          </Card>
        </motion.div>
      </div>
      <div className='col row-md-sm qrspace'>
        <div className='md qrcode'>
              <AwesomeQRCode options={{
                text: urltext,
                logoImage: dict[myContext.logoVal],
                colorDark: myContext.color1,
                colorLight: myContext.color2,
                // backgroundDimming: myContext.color3,
                // autoColor: true
                // gifBackground: gifArrayBuffer
                backgroundImage: dict1[myContext.bg]
                }}/>
        </div>
      </div>
      </div>
     </div>
  )
}

export default Content;