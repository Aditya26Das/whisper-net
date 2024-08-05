// src/components/Login.js
import React, {useState} from 'react';
import { Box, Button, Input, Stack } from '@chakra-ui/react';

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async() => {
  }

  return (
    <Box>
      <Stack spacing={3}>
        <Input placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        <Input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
        <Button colorScheme="blue" onClick={handleLogin}>Login</Button>
      </Stack>
    </Box>
  );
};

export default Login;

