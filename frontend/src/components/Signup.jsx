// src/components/Signup.jsx
import React, { useState } from 'react';
import { Box, Button, Input, Stack } from '@chakra-ui/react';

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profile,setProfile] = useState("");

  const handleSignup = async() => {
    
  }

  return (
    <Box>
      <Stack spacing={3}>
        <Input placeholder="Name" onChange={(e) => setName(e.target.value)}/>
        <Input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}/>
        <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        <Input placeholder="Confirm Password" type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
        <Input type="file" accept="image/*" onChange={(e) => setProfile(e.target.value)}/>
        <Button colorScheme="blue" onClick={handleSignup}>Sign Up</Button>
      </Stack>
    </Box>
  );
};

export default Signup;
