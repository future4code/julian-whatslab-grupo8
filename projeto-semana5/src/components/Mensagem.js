import React from 'react';
import styled from 'styled-components';

const LabeMessenger = styled.div`
  width: 30vw;
  height: 100vh;
  border: 1px grey solid;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const InputApp = styled.input`
  width: ${props => {
    if(props.largura === "pequeno"){
      return "5rem"
    } else if(props.largura === "grande"){
      return "18rem"
    }
  }};
`

const MsgEnviada = styled.div`
  margin-left: 1rem;
`

export class Mensagem extends React.Component{
   state = {
     
     mensagem: [
       {
        
       }
     ],

     valorInputUsuario: "",
     ValorInputMensagem: ""
   }
   
   envioMensagem = () => {
     const novaMensagem={
       usuario:this.state.valorInputUsuario +  ": ",
      mensagemUsuario:this.state.ValorInputMensagem
     }
     const novasMensagens=[...this.state.mensagem,novaMensagem];
     this.setState({mensagem: novasMensagens})

    
   }

   onChangeInputUsuario = (event) => {
     this.setState({valorInputUsuario: event.target.value});
    
   }

   onChangeInputMensagem = (event) => {
    this.setState({ValorInputMensagem: event.target.value });
   
  }

  render(){
    
    const listaMensagem = this.state.mensagem.map((msg)=>{
      return(
        <p>
          <strong>{msg.usuario}</strong>{msg.mensagemUsuario}
        </p>
      )
    });


    return (
        <LabeMessenger >
          <MsgEnviada>{listaMensagem}</MsgEnviada>
          <div>
          <InputApp
            largura={"pequeno"} 
            onChange={this.onChangeInputUsuario}
            value={this.state.valorInputUsuario}
            placeholder={"Usuário"}
          />
           <InputApp 
            largura={"grande"}
            onChange={this.onChangeInputMensagem}
            value={this.state.ValorInputMensagem}
            placeholder={"Mensagem"}
          />
          <button onClick={this.envioMensagem}>Enviar</button>
          </div>
        </LabeMessenger>
      );
  }

 

}

