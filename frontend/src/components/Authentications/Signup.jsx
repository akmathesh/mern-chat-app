import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [pic, setPic] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
  };

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const postProfilePic = () => {};

  const submitHandler = () => {};

  return (
    <VStack spacing="10px">
      <FormControl isRequired>
        <FormLabel fontSize="14px">Name</FormLabel>
        <Input
          placeholder="Enter Name"
          name="username"
          onChange={handleChange}
          value={userData.username}
        />
      </FormControl>
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

      <FormControl isRequired>
        <FormLabel fontSize="14px">Confirm Password</FormLabel>
        <InputGroup size="sm">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter confirm password"
            name="confirmPassword"
            onChange={handleChange}
            value={userData.confirmPassword}
          />
          <InputRightElement width="2.5rem">
            <Button onClick={handleClick} h="2rem" size="sm">
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl isRequired>
        <FormLabel fontSize="11px">Upload your picture</FormLabel>
        <Input
          id="pic"
          size="sm"
          type="file"
          accept="image/*"
          onChange={(e) => postProfilePic(e.target.files[0])}
        />
      </FormControl>

      <Button
        size="sm"
        mt="20px"
        width="100%"
        colorScheme="green"
        onClick={submitHandler}
      >
        Sign Up
      </Button>

      <Button
        size="sm"
        width="100%"
        colorScheme="red"
        onClick={() => {
          setGuestEmail("guest@example.com");
          setPassword("12345678");
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Signup;
