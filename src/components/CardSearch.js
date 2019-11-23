import React from 'react';

class CardSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ciudad: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCiudadChange = this.handleCiudadChange.bind(this);
    }

    handleCiudadChange(e){
        this.setState({
            ciudad : e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onCiudadChange(this.state.ciudad)
        e.currentTarget.reset();
    }

    render() {
        return (
            <div className="card card-body">
                <h2 className="card-title">Buscador de clima Chile</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="ciudad">Ciudad</label>
                        <input type="text" className="form-control" onChange={this.handleCiudadChange} />
                    </div>
                    <input className="btn btn-secondary btn-block" type="submit" value="Buscar"/>
                </form>
            </div>
        );
    }

}

export default CardSearch;