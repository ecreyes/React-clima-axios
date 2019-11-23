import React from 'react';

class CardResultado extends React.Component{
    render(){
        const ciudad = this.props.resultado.ciudad;
        const temp = this.props.resultado.temp;
        const temp_min = this.props.resultado.temp_min;
        const temp_max = this.props.resultado.temp_max;
        return(
            <div className="card card-body">
                <h1>{ciudad}</h1>
                <p>Temperatura: {temp}</p>
                <p>Max: {temp_max}</p>
                <p>Min: {temp_min}</p>
            </div>
        );
    }

}

export default CardResultado;