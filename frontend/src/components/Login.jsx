// src/components/Login.js
import React, {useState} from 'react';
import { Box, Button, Input, Stack } from '@chakra-ui/react';

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <Box>
      <Stack spacing={3}>
        <Input placeholder="Name" />
        <Input placeholder="Password" type="password" />
        <Button colorScheme="blue">Login</Button>
      </Stack>
    </Box>
  );
};

export default Login;

