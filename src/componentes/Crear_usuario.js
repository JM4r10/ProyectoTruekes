import React,{Component} from "react";

class Crear_usuario extends Component{
    constructor(){
        super();
        this.state={
            nombre:"",
            apellidos:"",
            edad:0,
            correo:"",
            contrasenia:"",
            ciudad:"Bogotá"
        }

        this.cambio=this.cambio.bind(this);
        this.guardar=this.guardar.bind(this);
    }

    cambio(e){
        // console.log(e.target.value,e.target.name)
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state);
    }

    guardar(){
        alert('Guardando...');
    }

    render(){
        return(
            <div className="card w-50 m-auto bg-dark mt-4 p-4 border-white">
                <h1 className="m-auto text-white">Nuevo usuario</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input 
                            type="text" 
                            placeholder="Nombres" 
                            name="nombre" 
                            className="form-control"
                            onChange={this.cambio}>
                        </input>
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            placeholder="Apellidos" 
                            name="apellidos" 
                            className="form-control mt-3" 
                            onChange={this.cambio}>
                        </input>
                            {/* NOTA: name: identifica el elemento dentro del target del evento e 
                                        id: identifica el elemento dentro de js*/}
                    </div>
                    <div className="form-group">
                        <input 
                            type="number" 
                            placeholder="Edad" 
                            name="edad" 
                            className="form-control mt-3" 
                            onChange={this.cambio}></input>
                    </div>
                    <div className="form-group">
                        <input 
                            type="email" 
                            placeholder="Correo" 
                            name="correo" 
                            className="form-control mt-3" 
                            onChange={this.cambio}>
                        </input>
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            placeholder="Contraseña" 
                            name="contrasenia" 
                            className="form-control mt-3" 
                            onChange={this.cambio}/>   
                    </div>
                    <div className="form-group">
                        <h5 className="text-white mt-2">CIUDAD</h5>
                        <select name="ciudad" className="form-control mt-3"  onChange={this.cambio}>
                            <option>Bogotá</option>
                            <option>Cali</option>
                            <option>Medellín</option>
                        </select>
                    </div>
                    <div className="d-grid gap-2 col-2 mx-auto mt-3">
                        <button className="btn btn-primary" type="button" onClick={this.guardar}>Crear</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Crear_usuario;

