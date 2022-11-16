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
        backgroundColor: "yellow",
        minHeight: "90vh",
        display: "inline-flexbox",
        flexDirection: "column",
        justifyContent: "center"
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
