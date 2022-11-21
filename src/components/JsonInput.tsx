import React, { MutableRefObject, useRef, useState } from 'react';
import { Box, Button, Input, Textarea } from '@chakra-ui/react';

function JsonInput(props: {
    onSubmit: {
        (interfaceName: string, jsonInput: string): void
    }
}) {

    const interfaceName = useRef('')
    const jsonInput = useRef('')



    const style = {
        // @media screen and(max - width: 600px) {
        //     width: 100%;
        // 450px
    }

    return (
        <Box
            bg="#BCEAD5"
            p={2.5}
            maxW="50vw"
            h="80vh"
            flexGrow={1}
            alignSelf="stretch"
        >
            <h1>
                JSON input
            </h1>
            <br />
            <Input type="text" name="interface-name" required
                placeholder='Enter your interface name'
                onChange={(e) => interfaceName.current = e.target.value} />
            <br />
            <br />
            <Textarea name="Json-input-text" id=""
                minH="48vh"
                maxH="48vh"
                placeholder='Enter your JSON here'
                onChange={(e) => jsonInput.current = e.target.value} />
            <br />
            <br />
            <Button
                bg="#9ED5C5"
                minW={220}
                onClick={() => { props.onSubmit(interfaceName.current, jsonInput.current) }}
            >
                Convert JSON to TS</Button>
            {/* <br /> */}
            {/* {jsonInput.current} */}
            {/* <br /> */}
            {/* {typeof (jsonInput.current)} */}
        </Box >
    );
}

export default JsonInput;
