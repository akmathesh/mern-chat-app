import {
  Box,
  Center,
  Container,
  Tabs,
  TabList,
  Text,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Authentications/Login";
import Signup from "../components/Authentications/Signup";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={2}
        bg="white"
        w="100%"
        m="20px 0 5px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="xl">
          <Center>Chatie-Chat</Center>
        </Text>
      </Box>
      <Box
        d="flex"
        justifyContent="center"
        p={2}
        bg="white"
        w="100%"
        m="10px 0 10px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded">
          <TabList>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
