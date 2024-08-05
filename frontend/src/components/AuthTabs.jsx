// src/components/AuthTabs.js
import React, { useState } from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Login from './Login';
import Signup from './Signup';

const AuthTabs = () => {
  return (
    <Box w="100%" p={4}>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Login</Tab>
          <Tab>Sign Up</Tab>
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
  );
};

export default AuthTabs;
