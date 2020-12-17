import React, {Component} from 'react';

class Buscador extends Component {

      constructor(props) {
        super(props);
        this.state = { value: ""};
      }

      busquedaRef = React.createRef();
      obtenerDatos = (e) => {
        e.preventDefault();
        console.log(this.busquedaRef.current.value);
        const consulta = this.busquedaRef.current.value;
        this.props.datosBusqueda(consulta, this.value);
      };

    render(){      
        return (
            <>
            <form onSubmit={this.obtenerDatos}>
            <div className="row">
              <div className="form-group col-md-9">
                <input
                  ref={this.busquedaRef}
                  type="text"
                  className="form-control form-control-lg"
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="submit"
                  className="btn btn-lg btn-danger btn-block"
                  placeholder=""
                />
              </div>
            </div>
          </form>
        </>
      );
    }
  }
  export default Buscador;