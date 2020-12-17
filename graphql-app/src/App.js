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
      isSearch: false,
      pagina: 0
    };
  }

  datosBusqueda = (consulta) => {
    var isSearch= false;
    if(consulta.length > 0)
    {
      isSearch = true;
    }
    this.setState({
      consulta: consulta,
      pagina: 0,
      isSearch: isSearch
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
              {this.state.isSearch ? <Results nombre = {this.state.consulta}/>: null }
              
            </div>
        </div>
            
            
      </ApolloProvider> 
    );
  }

}


export default App;
