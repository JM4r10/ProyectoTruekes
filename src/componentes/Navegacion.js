import React, {Component} from "react";
import Formulario from "./Formulario.js";
import Inicio_sesion from "./Inicio_sesion.js";
import Crear_usuario from "./Crear_usuario.js";
import Cargar from "./Cargar.js";

class Navegacion extends Component{
    
    render(){
        
        return(
            <div className="bg-dark">
                <div className="nav">
                <ul className="nav nav-tabs nav-pills" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active text-white" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">{this.props.enlace1}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link text-white" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">{this.props.enlace2}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link text-white" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">{this.props.enlace3}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link text-white" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">{this.props.enlace4}</button>
                    </li>
                    </ul>

                    <form className="d-flex ms5" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    <div className="text-primary ms-5 mt-2">
                        Usuario: Luis
                    </div>
                </div>
                
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active text-white" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                            <Cargar/>
                        </div>
                        <div className="tab-pane fade text-white" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                            <Formulario/>
                        </div>
                        <div className="tab-pane fade text-white" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                            <Inicio_sesion/>
                        </div>
                        <div className="tab-pane fade text-white" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">
                            <Crear_usuario/>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Navegacion;