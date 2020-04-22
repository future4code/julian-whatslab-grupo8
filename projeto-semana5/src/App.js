import React from 'react';
import './App.css';
import {Mensagem} from './components/Mensagem.js'
import styled from 'styled-components';

const Principal = styled.div`  
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
`


class App extends React.Component {
  render(){



    return (
        <Principal>
           <Mensagem/>
        </Principal>
      );
  }
  
}

export default App;
