import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cards.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Content from './content.js';
import {GrClose} from 'react-icons/gr';



function Cards() {
    const [toggle, setToggle] = useState(0);

    const handleChange = (selected) => {
      setToggle(selected)
    }


  return (
    <div className='main'>
      <h2 className='heading' style={{color:'white', textAlign:'center'}}>Need an Instant QR Code:</h2>
    <div className='container cardgrp' style={{width:'max-content'}}>
      {(toggle === 0 || toggle === 1) &&
    <motion.div transition={{layout:{duration : 0.45, type : 'spring'}}} layout className='col card url' style={{borderRadius:"1rem", boxShadow: "0px 10px 30px rgba(0,0,0,0.5)"}}>
    <Card>
    <motion.div className='ccard' layout='position' >
      <Card.Body onClick={()=>handleChange(1)}>
        <Card.Title className='title'>URL</Card.Title>
      </Card.Body>
      {(toggle === 1) && <GrClose onClick={()=>handleChange(0)}/>}
    </motion.div>
      {(toggle === 1) &&
      <motion.div initial={{opacity:0}} animate={{opacity:1}} className='col onexpand'>
        <Content label = 'Website(URL)' hint = 'www.example.com'/>
      </motion.div>
    }
    </Card>
    </motion.div>
}

{(toggle === 0 || toggle === 2) &&
    <motion.div transition={{layout:{duration : 0.45, type : 'spring'}}} layout className='card bc' style={{borderRadius:"1rem", boxShadow: "0px 10px 30px rgba(0,0,0,0.5)"}}>
    <Card>
    <motion.div className='ccard' layout='position' >
      <Card.Body onClick={()=>handleChange(2)}>
        <Card.Title className='title'>SMS</Card.Title>
      </Card.Body>
      {(toggle === 2) && <GrClose onClick={()=>handleChange(0)}/>}
      </motion.div>
      {(toggle === 2) &&
      <motion.div initial={{opacity:0}} animate={{opacity:1}} className='onexpand'>
      <Content label = 'Recipient Phone Number' hint = 'Enter Recipient Phone Number'/>
    </motion.div>
    }
    </Card>
    </motion.div>
}

{(toggle === 0 || toggle === 3) &&
    <motion.div transition={{layout:{duration : 0.45, type : 'spring'}}} layout className='card bc' style={{borderRadius:"1rem", boxShadow: "0px 10px 30px rgba(0,0,0,0.5)"}}>
    <Card>
    <motion.div className='ccard' layout='position' >
      <Card.Body onClick={()=>handleChange(3)}>
        <Card.Title className='title'>Call</Card.Title>
      </Card.Body>
      {(toggle === 3) && <GrClose onClick={()=>handleChange(0)}/>}
      </motion.div>
      {(toggle === 3) &&
      <motion.div initial={{opacity:0}} animate={{opacity:1}} className='onexpand'>
      <Content label = 'Phone Number' hint = '+1 12345 67890'/>
    </motion.div>
    }
    </Card>
    </motion.div>
}

{(toggle === 0 || toggle === 4) &&
    <motion.div transition={{layout:{duration : 0.45, type : 'spring'}}} layout className='card bc' style={{borderRadius:"1rem", boxShadow: "0px 10px 30px rgba(0,0,0,0.5)"}}>
    <Card>
    <motion.div className='ccard' layout='position' >
      <Card.Body onClick={()=>handleChange(4)}>
        <Card.Title className='title'>Text</Card.Title>
      </Card.Body>
      {(toggle === 4) && <GrClose onClick={()=>handleChange(0)}/>}
      </motion.div>
      {(toggle === 4) &&
      <motion.div initial={{opacity:0}} animate={{opacity:1}} className='onexpand'>
      <Content label = 'Text' hint = 'Enter Text'/>
    </motion.div>
    }
    </Card>
    </motion.div>
}

{(toggle === 0 || toggle === 5) &&
    <motion.div transition={{layout:{duration : 0.45, type : 'spring'}}} layout className='card bc' style={{borderRadius:"1rem", boxShadow: "0px 10px 30px rgba(0,0,0,0.5)"}}>
    <Card>
    <motion.div className='ccard' layout='position' >
      <Card.Body onClick={()=>handleChange(5)}>
        <Card.Title className='title'>PDF</Card.Title>
      </Card.Body>
      {(toggle === 5) && <GrClose onClick={()=>handleChange(0)}/>}
      </motion.div>
      {(toggle === 5) &&
      <motion.div initial={{opacity:0}} animate={{opacity:1}} className='onexpand'>
      <Content label = 'URL for PDF' hint = 'www.example.com/yourfile.pdf'/>
    </motion.div>
    }
    </Card>
    </motion.div>
}

{(toggle === 0 || toggle === 6) &&
    <motion.div transition={{layout:{duration : 0.45, type : 'spring'}}} layout className='card bc' style={{borderRadius:"1rem", boxShadow: "0px 10px 30px rgba(0,0,0,0.5)"}}>
    <Card>
    <motion.div className='ccard' layout='position' >
      <Card.Body onClick={()=>handleChange(6)}>
        <Card.Title className='title'>Social</Card.Title>
      </Card.Body>
      {(toggle === 6) && <GrClose onClick={()=>handleChange(0)}/>}
      </motion.div>
      {(toggle === 6) &&
      <motion.div initial={{opacity:0}} animate={{opacity:1}} className='onexpand'>
      <Content label = 'Social Media Profile/Post URL' hint = 'www.facebook.com/yourpage'/>
    </motion.div>
    }
    </Card>
    </motion.div>
}
    </div>
    </div>
  );
}

export default Cards;