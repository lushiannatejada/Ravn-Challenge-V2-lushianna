import './App.css';
import { Component } from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './Components/Graphql/Client';
import {Results} from './Components/Repositorio';
import Buscador from './Components/Buscador';
 

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      consulta: '',
      resultados: [],
      pagina: 0
    };
  }

  datosBusqueda = (consulta) => {
    this.setState({
      consulta: consulta,
      pagina: 0
    })    
  }
  
  render() {
    return (
      <ApolloProvider client={client}>
          <div className="app container"  >
            <div className="jumbotron" style={{paddingTop:10, color:"black"}}>
              <p style={{color: "black"}} className="lead text-center"><h2>Star Wars</h2></p>
              <Buscador
                datosBusqueda={this.datosBusqueda}
              />
            </div>
            <div className="justify-content-center" >
              <Results nombre = {this.state.consulta}/>
            </div>
        </div>
            
            
      </ApolloProvider> 
    );
  }

}


export default App;
