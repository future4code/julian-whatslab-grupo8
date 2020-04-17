import React from 'react';

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
       usuario:this.state.valorInputUsuario,
      mensagemUsuario:this.state.ValorInputMensagem
     }
     const novasMensagens=[...this.state.mensagem,novaMensagem];
     this.setState({mensagem: novasMensagens})

    
   }

   onChangeInputUsuario = (event) => {
     this.setState({valorInputUsuario: event.target.value });
    
   }

   onChangeInputMensagem = (event) => {
    this.setState({ValorInputMensagem: event.target.value });
   
  }

  render(){
    
    const listaMensagem = this.state.mensagem.map((msg)=>{
      return(
        <p>
        {msg.usuario}: 
        {msg.mensagemUsuario}
        </p>
      )
    });


    return (
        <div>
          <div>{listaMensagem}</div>
          <input onChange={this.onChangeInputUsuario}
            value={this.state.valorInputUsuario}
            placeholder={"Usuário"}
          />
           <input onChange={this.onChangeInputMensagem}
             value={this.state.ValorInputMensagem}
             placeholder={"Mensagem"}
          />
          <button onClick={this.envioMensagem}>Enviar</button>
        </div>
      );
  }

 

}

