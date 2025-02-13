import React from 'react';

import Home from './src/Home';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <Home />
      <StatusBar backgroundColor="#181818" barStyle="light-content" />
    </>
  );
}
