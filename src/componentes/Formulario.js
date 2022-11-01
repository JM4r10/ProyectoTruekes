import React,{Component} from "react";

class Formulario extends Component{
    constructor(){
        super();
        this.state={
            nombre:"",
            descripcion:"",
            usuario:"",
            numero:0,
            valor:"Alto",
            imagen:""
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
                <h1 className="m-auto text-white">Nuevo Articulo</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" placeholder="Nombre Artículo" name="nombre" onChange={this.cambio} className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Descripcion Artículo" name="descripcion" className="form-control mt-3" onChange={this.cambio}></input>
                        {/* NOTA: name: identifica el elemento dentro del target del evento e 
                                    id: identifica el elemento dentro de js*/}
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Cantidad" name="numero" className="form-control mt-3" onChange={this.cambio}></input>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Usuario" name="usuario" className="form-control mt-3" onChange={this.cambio}></input>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Imagen Articulo" name="imagen" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    
                    <div className="form-group">
                        <h5 className="text-white mt-2">PRIORIDAD</h5>
                        <select name="valor" className="form-control mt-3"  onChange={this.cambio}>
                            <option>Alto</option>
                            <option>Medio</option>
                            <option>Alto</option>
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

export default Formulario;