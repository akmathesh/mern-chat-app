import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  VStack,
} from "@chakra-ui/react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData((currValue) => {
      return {
        ...currValue,
        [name]: value,
      };
    });

    console.log([name], value);
  };

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = () => {};
  return (
    <VStack spacing="10px">
      <FormControl isRequired>
        <FormLabel fontSize="14px">Email</FormLabel>
        <Input
          size="sm"
          placeholder="Enter Email"
          name="email"
          onChange={handleChange}
          value={userData.email}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel fontSize="14px">Password</FormLabel>
        <InputGroup size="sm">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
            value={userData.password}
          />
          <InputRightElement width="2.5rem">
            <Button onClick={handleClick} h="2rem" size="sm">
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        mt="20px"
        width="100%"
        colorScheme="green"
        onClick={submitHandler}
      >
        Login
      </Button>
    </VStack>
  );
};

export default Login;
