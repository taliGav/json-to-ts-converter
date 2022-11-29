import { Box, Text, Heading } from "@chakra-ui/react";
import { useWindowSize } from "react-use/lib";
import Confetti from "react-confetti";

function TypeScriptOutput(props: { interfaceResult: string }) {

  const { width, height } = useWindowSize();

  if (props.interfaceResult) {
    console.log("interfaceResult", props.interfaceResult);

    return (
      <Box
        bg="#9ED5C5"
        p={2.5}
        maxW="50vw"
        flexGrow={1}
        alignSelf="stretch"
        className="Ts-output-container"
      >
        <Confetti
          width={width}
          height={height}
          recycle={false}
          />

        <Heading fontSize="xl">TypeScript Interface Output</Heading>

        <Box bg="#FFEFD6" mt={2.5} p={2.5} borderRadius={10}>
          <Text style={{ whiteSpace: "pre-line", textAlign: "left" }}>
            {props.interfaceResult}
          </Text>
        </Box>
      </Box>
    );
  } else {
    console.log("no result yet");
    return (
      <Box bg="#9ED5C5" p={2.5} maxW="50vw" flexGrow={1} alignSelf="stretch">
        <Heading fontSize="xl">TypeScript Interface Output</Heading>
        <Heading fontSize="lg" mt="8">
          Input was not provided - Please insert json
        </Heading>
      </Box>
    );
  }
}


export default TypeScriptOutput;