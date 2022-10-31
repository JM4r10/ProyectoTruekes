import React, {Component} from "react";
// import img1 from "./img1.jpg" 


class Tarjeta extends Component{    
    constructor(){
        super();
        this.state={
            titulo:''
        }    
    }
    editar(){
        alert("Editando...");
    }

    render(){
        // let img1 = "./img1.jpg";
        // let position = parseInt(this.props.position)
            return(
                <div className="col-sm-4">
                {/* <div className="card tarjeta"> */}
                    <div className="card mb-4">
                        <img height="300" width="auto" src={process.env.PUBLIC_URL+this.props.imagen} className="card-img-top" alt={this.props.numero}/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.titulo}</h5>
                            <p className="card-text">{this.props.descripcion}</p>
                            <span className="bg-danger rounded-pill text-white" >Prioridad: {this.props.prioridad}</span> <br/> 
                            <span className="bg-success rounded-pill text-white">Responsable: {this.props.prioridad}</span> <br/>
                            <span className="bg-primary rounded-pill text-white">Tiempo: {this.props.numero} minutos</span> 
                            <br/> <br/> 
                            <button formTarget="formulario1" className="btn btn-primary border mx-auto me-1" onClick={this.editar}>Editar</button>
                            <button className="btn btn-danger border mx-auto">Eliminar</button>
                        </div>
                    </div>
                </div>  
            );        
        }
        // let tarjetas = this.state.Datos.map((dato)=>{
        //     return(
        //         <div className="col-sm-4">
        //         {/* <div className="card tarjeta"> */}
        //             <div className="card">
        //                 <img src="..." className="card-img-top" alt={dato.numero}/>
        //                 <div className="card-body">
        //                     <h5 className="card-title">{dato.titulo}</h5>
        //                     <p className="card-text">{dato.descripcion}</p>
        //                     <button formTarget="formulario1" className="btn btn-primary border mx-auto">Editar</button>
        //                     <button className="btn btn-danger border mx-auto">Eliminar</button>
        //                 </div>
        //             </div>
        //         </div>  
        //     )
        // })       

}
export default Tarjeta;