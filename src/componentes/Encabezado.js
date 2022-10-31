import React, {Component} from "react";

class Encabezado extends Component{
    render(){
        return(
            <div>
                <img className="mx-auto d-block mb-3" src={process.env.PUBLIC_URL+"./Recursos/trueke_1.png"} height="200" width="auto" alt="trueke_1"/>
            </div>
        );
    }
}


export default Encabezado;