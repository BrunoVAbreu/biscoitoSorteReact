import React, { Component } from 'react';
import './estilo.css';
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Todas as coisas são difíceis antes de se tornarem fáceis','Você sempre será a sua melhor companhia','Deixe de lado as preocupações e seja feliz','A nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre!','Amizade e Amor são coisas que se unem num piscar de olhos','Surpreender e ser surpreendido é o segredo do amor','Você é do tamanho do seu sonho','Seja gentil com os outros seres humanos','A vida coloca em nossa frente opções','A maior barreira para o sucesso é o medo do fracasso','Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.','A vida é melhor para aqueles que fazem o melhor dela','Não importa o quão devagar você vá, desde que você não pare','O sucesso é ir de fracasso em fracasso sem perder entusiasmo','Acredite em milagres, mas não dependa deles','O insucesso é apenas uma oportunidade para recomeçar com mais inteligência','O sucesso é a soma de pequenos esforços repetidos dia após dia','A vida é 10% o que acontece comigo e 90% como eu reajo a isso','A vida é uma aventura ousada ou não é nada','O segredo do sucesso é a constância do propósito'];}

    quebraBiscoito(){
      let state = this.state;
      let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
      state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
      this.setState(state);
    }
  render(){
    return(
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img"></img>
        <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>Abrir Biscoito</button>
      </div>
    );
  }
}
export default App; 