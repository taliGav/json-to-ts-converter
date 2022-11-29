import { Box, Text } from '@chakra-ui/react';

function Footer() {

    return (
        <Box className="Footer"
            bg="#DEF5E5"
            h="6vh"
            py={3}
        >
            <Text
                textAlign="center"
            >© Tali's project </Text>
        </Box >
    );
}

export default Footer;
