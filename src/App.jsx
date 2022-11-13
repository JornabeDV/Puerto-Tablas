import { useState } from 'react'
import './style.css';
import NavBar from './components/header/NavBar'; 
import CardItem from './components/components Item/CardItem';
import ContainerCardItems from './components/components Item/ContainerCardItems';

function App () {
  
  return (
    <>
    <NavBar />
    <ContainerCardItems />
    </>
  );
}

export default App

