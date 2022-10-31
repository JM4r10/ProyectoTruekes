import React,{Component} from "react";

class Formulario extends Component{
    constructor(){
        super();
        this.state={
            nombre:"",
            descripcion:"",
            usuario:"",
            numero:0,
            valor:"Alta",
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
            <div className="card w-50 m-auto bg-dark mt-2 mb-2 border-primary">
                <h1 className="m-auto text-white">Nuevo Articulo</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" placeholder="Titulo Tarjeta" name="titulo" onChange={this.cambio} className="form-control mt-3"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Descripcion Tarjeta" name="descripcion" className="form-control mt-3"></input>
                        {/* NOTA: name: identifica el elemento dentro del target del evento e 
                                    id: identifica el elemento dentro de js*/}
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Tiempo en minutos" name="numero" onChange={this.cambio} className="form-control mt-3"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Responsable Tarjeta" name="numero" onChange={this.cambio} className="form-control mt-3"></input>
                    </div>
                    <div className="form-group">

                        <select name="valor" className="form-control mt-3">
                            <option>Alto</option>
                            <option>Medio</option>
                            <option>Alto</option>
                        </select>
                    </div>
                    <div className="d-grid gap-2 col-2 mx-auto mt-3">
                        <button className="btn btn-primary" type="button" onClick={this.guardar}>Guardar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Formulario;