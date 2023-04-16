import './App.css';
import Cards from "./containers/cards";
import AppContext from './containers/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [value1, setValue1] = useState('#000000');
  const [value2, setValue2] = useState('#ffffff');
  const [value3, setValue3] = useState('#123456');
  const [selectedLogo, setSelectedLogo] = useState(0);
  const [back, setBack] = useState(0);
  const [tmplt, setTmplt] = useState(0);

  
  const userSettings = {
    color1: value1,
    color2: value2,
    color3: value3,
    logoVal: selectedLogo,
    bg: back,
    tplt: tmplt,
    setTmplt,
    setBack,
    setSelectedLogo,
    setValue1,
    setValue2,
    setValue3
  };

  return (
    <AppContext.Provider value={userSettings}>
      <div className='App'>
        <Cards/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
