import React, { MutableRefObject, useRef, useState } from 'react';
import { Button, Input, Textarea } from '@chakra-ui/react';

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
                backgroundColor: "#BCEAD5",
                flexGrow: 1,
                alignSelf: "stretch",
                maxWidth: "50vw",
                height: "80vh",
                padding: "10px",

                // @media screen and(max - width: 600px) {
                //     width: 100%;
                // 450px

            }}>
            <h1>
                JSON input
            </h1>
            <br />
            <Input type="text" name="interface-name" required
                style={{
                    minWidth: "250px",
                }}
                placeholder='Enter your interface name'
                onChange={(e) => interfaceName.current = e.target.value} />
            <br />
            <br />
            <Textarea name="Json-input-text" id=""
                style={{
                    minHeight: "200px",
                    maxHeight: "60%",
                }}
                placeholder='Enter your JSON here'
                onChange={(e) => jsonInput.current = e.target.value} />
            <br />
            <br />
            <Button
                style={{
                    backgroundColor: "#9ED5C5",
                    color: "black",
                    minWidth: "250px",
                }}

                onClick={(e) => { props.onSubmit(interfaceName.current, jsonInput.current) }}
            >Convert JSON to TS</Button>
            {/* <br /> */}
            {/* {jsonInput.current} */}
            {/* <br /> */}
            {/* {typeof (jsonInput.current)} */}
        </div >
    );
}

export default JsonInput;
