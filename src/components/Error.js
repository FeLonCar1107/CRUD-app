import React from "react";

class Error extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            tieneError: false,
            mensajeError: "",
        };
    }

    static getDerivedStateFromError(error) {
        //Metodo 1
        return { tieneError: true, mensajeError: error.mensaje};
    }

    componentDidCatch(error) {
        console.log("Component did catch:", error.message);
    }

    render() {
        if (this.state.tieneError) {
            return(
                <div>
                    <h1>Hubo un error</h1>
                    <p>{this.state.mensajeError}</p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default Error;