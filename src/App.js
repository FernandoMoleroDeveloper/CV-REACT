
import './App.css';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Knowledge from './components/Knowledge/Knowledge';
import { Text } from '@chakra-ui/react'
//import { Button, Stack } from '@chakra-ui/react';
function App() {
  return (
    <div className="app">
      <Header></Header>
      
      <Text  color='Black' fontSize='3xl'>Puedes contactar conmigo a través de las siguientes vías:</Text>
      <Contact></Contact>
      <Text  color='Black' fontSize='3xl'>Estos son algunos de mis conocimientos</Text>
      
      <Knowledge></Knowledge>
    </div>
  );
}

export default App;
