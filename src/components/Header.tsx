import { Box , Heading} from '@chakra-ui/react';
import { ArrowRightIcon} from '@chakra-ui/icons';


function Header() {
    return (
      <Box className="Header"
      bg="#8EC3B0"
      h="8vh"
      px={2.5}
      py={4}
      textAlign={['left', 'left', 'center', 'center']}
      fontSize={['md', 'md', 'lg', 'lg']}
      minW="480px"
      >
          <Heading margin={"auto"}>JSON <ArrowRightIcon w={6} h={6} pb={1.5}/>  TS Interfaces Converter</Heading>
      </Box >
    );
  
  }
  
  export default Header;
  