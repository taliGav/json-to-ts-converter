import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';
import JsonInput from './components/JsonInput';
import TypeScriptOutput from './components/TypescriptOutput';


function App() {

  const [interfaceName, setInterfaceName] = useState('') 
  const [input, setinput] = useState('') 

  return (
    <Box className="App"
    bg="#FFEFD6" display="flex" minH='80vh'>

      <JsonInput onSubmit={(x: string, y:string) => {setInterfaceName(x)
      setinput(y) 
      }} />

      <TypeScriptOutput mainInterfaceName={interfaceName} updatedJsonInput={input} />

    </Box >
  );

}

export default App;
