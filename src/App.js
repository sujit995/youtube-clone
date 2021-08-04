import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';


function App() {

  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(value => !value)
  return (
    <>
    <Header toggleSidebar={toggleSidebar}/>
    <div className="app__container">
      <Sidebar sidebar={sidebar}/>
      <Container fluid className="app__main">
        <HomeScreen />
      </Container>
    </div>
    </>
  );
}

export default App;
