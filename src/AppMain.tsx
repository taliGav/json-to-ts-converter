import React from 'react';
import JsonInput from './cmps/JsonInput';
import TypeScriptOutput from './cmps/TypescriptOutput';


function AppMain() {
  return (
    <div className="App-main"
      style={{
        backgroundColor: "yellow",
        minHeight: "90vh",
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
