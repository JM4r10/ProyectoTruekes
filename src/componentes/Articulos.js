import React, {Component} from "react";
// import img1 from "./img1.jpg" 


class Articulos extends Component{    
    constructor(){
        super();
        this.state={
            nombre:''
        }    
    }
    editar(){
        alert("Editando...");
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
                            <span className="bg-success rounded-pill text-white">Usuario: {this.props.nombre}</span> <br/>
                            <span className="bg-primary rounded-pill text-white">Cantidad: {this.props.numero} </span> 
                            <br/> <br/> 
                            <button formTarget="formulario1" className="btn btn-primary border mx-auto me-1" onClick={this.editar}>Editar</button>
                            <button className="btn btn-danger border mx-auto">Eliminar</button>
                        </div>
                    </div>
                </div>  
            );        
        }
        

}
export default Articulos;