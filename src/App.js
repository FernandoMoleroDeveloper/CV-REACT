
import './App.css';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Knowledge from './components/Knowledge/Knowledge';
import { Text } from '@chakra-ui/react'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
//import { Button, Stack } from '@chakra-ui/react';
function App() {
  return (
    <div className="app">
      <Header className="header"></Header>
      <br></br>
      <br></br>
      <br></br>
      
      
      <Text  color='Black' fontSize='2xl'>Puedes contactar conmigo a través de las siguientes vías:</Text>
      <Contact></Contact>
      <br></br>
      <br></br>

      <About></About>
      <br className="header"></br>

      <Projects></Projects>
      <br></br>
      <br></br>

      <Text  color='Black' fontSize='2xl'>Estos son algunos de mis conocimientos</Text>
      <br></br>
      <Knowledge></Knowledge>
    </div>
  );
}

export default App;
