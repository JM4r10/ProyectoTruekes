import React,{Component} from "react";
// import logo from "./logo2.png"

class PiePagina extends Component{
    render(){
        // let var1=require("./recursos/tiktok.svg").default;
        // let var2="./multimedia/twitter.svg";
        return(            
                <div>
                    <div className="b-example-divider"></div>

                    <div className="fluid">
                        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark">
                            <div className="col-md-4 d-flex align-items-center">
                                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"> 
                                    <img className="bi" width="100" height="auto" src={process.env.PUBLIC_URL+"./Recursos/logo2.png"} alt="logoUTP"/>
                                </a>
                                <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
                            </div>
                            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                                <li className="ms-3"><img className="bi" width="24" height="24" src={process.env.PUBLIC_URL+"./Recursos/tiktok.svg"} alt="TiktokIcon"/></li>
                                <li className="ms-3"><img className="bi" width="24" height="24" src={process.env.PUBLIC_URL+"./Recursos/facebook.svg"} alt="FacebookIcon"/></li>
                                <li className="ms-3"><img className="bi" width="24" height="24" src={process.env.PUBLIC_URL+"./Recursos/instagram.svg"} alt="InstagramIcon"/></li>
                                <li className="ms-3"><img className="bi" width="24" height="24" src={process.env.PUBLIC_URL+"./Recursos/youtube.svg"} alt="YouTubeIcon"/></li>
                                <li className="ms-3"><img className="bi" width="24" height="24" src={process.env.PUBLIC_URL+"./Recursos/twitter.svg"} alt="TwitterIcon"/></li>
                            </ul>
                        </footer>
                    </div> 
                </div>                           
        )
    }
}

export default PiePagina