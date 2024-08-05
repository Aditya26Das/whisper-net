// src/App.jsx
import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import AuthTabs from './components/AuthTabs';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Box
        className="app-container"
        w={["90%", "80%", "70%", "60%"]}
        maxW="500px"
        p={4}
        boxShadow="md"
      >
        <AuthTabs />
      </Box>
    </ChakraProvider>
  );
}

export default App;
