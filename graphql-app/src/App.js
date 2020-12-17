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


  render() {
    return (
      <ApolloProvider client={client}>
          <div className="app container"  >
            <div className="jumbotron" style={{paddingTop:10, color:"black"}}>
              <p style={{color: "black"}} className="lead text-center"><h2>Star Wars</h2></p>
              <Results />
            </div>
        </div>
            
            
      </ApolloProvider> 
    );
  }

}


export default App;
