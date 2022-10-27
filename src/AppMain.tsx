import React from 'react';
import JsonInput from './cmps/Json-input';
import TypeScriptOutput from './cmps/Typescript-output';


function AppMain() {
  return (
    <div className="App-main"
      style={{
        display: "inline-flexbox",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >

      <JsonInput />
      <TypeScriptOutput />

    </div >
  );
}

export default AppMain;
