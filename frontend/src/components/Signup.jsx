// src/components/Signup.jsx
import React from 'react';
import { Box, Button, Input, Stack } from '@chakra-ui/react';

const Signup = () => {
  return (
    <Box>
      <Stack spacing={3}>
        <Input placeholder="Name" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Confirm Password" type="password" />
        <Input type="file" accept="image/*" />
        <Button colorScheme="blue">Sign Up</Button>
      </Stack>
    </Box>
  );
};

export default Signup;
