import React, { MutableRefObject, useRef, useState } from 'react';

function JsonInput(props: {
    onSubmit: {
        (interfaceName: string, jsonInput: string): void
    }
}) {

    const interfaceName = useRef('')
    const jsonInput = useRef('')

    return (
        <div className="Json-input-container"
            style={{
                display: "inline-flexbox",
                backgroundColor: "blueviolet",
                maxWidth: "100vw"
            }}>
            <h1>
                JSON input
            </h1>
            <br />
            <input type="text" name="interface-name" required
                style={{
                    minWidth: "250px",
                }}
                placeholder='Enter your interface name'
                onChange={(e) => interfaceName.current = e.target.value} />
            <br />
            <input type="textarea" name="Json-input-text" id=""
                style={{
                    minWidth: "250px",
                    minHeight: "100px",
                }}
                placeholder='Enter your JSON here'
                onChange={(e) => jsonInput.current = e.target.value} />
            <br />
            <br />
            <button
                onClick={(e) => { props.onSubmit(interfaceName.current, jsonInput.current) }}
            >Convert JSON to TS</button>
            <br />
            {jsonInput.current}
            <br />
            {typeof (jsonInput.current)}
        </div >
    );
}

export default JsonInput;
