import React from 'react';
import './App.css';
import CardSearch from './CardSearch';
import CardResultado from './CardResultado';
import axios from 'axios';

//http://api.openweathermap.org/data/2.5/weather?q=Valdivia,cl&units=metric&appid=f9e90ef6b13c7da7839e394c90e37378

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			ciudad:"",
			temp:"",
			temp_min:"",
			temp_max:""
		};
		this.weather = {
			pais:"cl",
			units:"metric",
			appid:"f9e90ef6b13c7da7839e394c90e37378"
		};
		this.handleCiudadChange = this.handleCiudadChange.bind(this);
	}

	handleCiudadChange(ciudad){
		let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${this.weather.pais}&units=${this.weather.units}&appid=${this.weather.appid}`;
		axios.get(url).then(res=>{
			let data = res.data;
			this.setState({
				ciudad:ciudad,
				temp:data.main.temp,
				temp_min:data.main.temp_min,
				temp_max:data.main.temp_max
			},()=>console.log(this.state));
		}).catch(error=>console.log(error));
	}



	render() {
		return (
			<div className="container">
				<h1>App clima</h1>
				<hr />
				<div className="row">
					<div className="col-12 col-sm-6">
						<CardSearch onCiudadChange = {this.handleCiudadChange}/>
					</div>
					<div className="col-12 col-sm-6">
						<CardResultado resultado={this.state}/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
