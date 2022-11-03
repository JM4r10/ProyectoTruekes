import React, {Component} from "react";
// import img1 from "./img1.jpg" 


class Articulos extends Component{    
    constructor(){
        super();
        this.state={
            btn1:
            <div>
                <button formTarget="formulario1" className="btn btn-primary border mx-auto me-2 mt-1" onClick={this.editar}>Editar</button>
                <button className="btn btn-danger border mx-auto mt-1" onClick={this.eliminar}>Eliminar</button>                
            </div>,
            btn2: <button formTarget="formulario1" className="btn btn-success border mx-auto mt-1" onClick={this.intercambiar}>Intercambiar</button>
        };    
    }

    botones(usuario){
        if(usuario === 'Luis') return this.state.btn1;
        else return this.state.btn2;
        
    
    }

    editar(){
        alert("Editando...");
    }

    intercambiar(){
        alert("Trading...");
    }

    eliminar(){
        alert("Eliminando...");
    }

    render(){
        
            return(
                <div className="col-sm-4">                
                    <div className="card mt-4 text-center bg-dark border-light">
                        <img height="650" width="auto" src={process.env.PUBLIC_URL+this.props.imagen} className="card-img-top" alt={this.props.numero}/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.nombre}</h5>
                            <p className="card-text">{this.props.descripcion}</p>
                            <span className="bg-danger rounded-pill text-white" >Valor: {this.props.valor}</span> <br/> 
                            <span className="bg-success rounded-pill text-white">Usuario: {this.props.usuario}</span> <br/>
                            <span className="bg-primary rounded-pill text-white">Cantidad: {this.props.numero} </span> 
                            <br/>
                            {this.botones(this.props.usuario)}
                            
                        </div>
                    </div>
                </div>  
            );        
        }
        

}
export default Articulos;