import React, { useState } from 'react';
import './App.css';
import JsonInput from './cmps/JsonInput';
import TypeScriptOutput from './cmps/TypescriptOutput';


function App() {

  const [interfaceName, setInterfaceName] = useState('') 
  const [input, setinput] = useState('') 

  return (
    <div className="App"
      style={{
        backgroundColor: "#FFEFD6",
        minHeight: "80vh",
        display: "flex",
      }}
    >

      <JsonInput onSubmit={(x: string, y:string) => {setInterfaceName(x)
      setinput(y) 
      }} />

      <TypeScriptOutput mainInterfaceName={interfaceName} updatedJsonInput={input} />

    </div >
  );

}

export default App;
