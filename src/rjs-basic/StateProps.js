import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {
    constructor(props){
        super(props);
        this.state = {
            makanan : "Bakso"
        }
    }

    gantiMakanan = (nama_makanan) => {
        this.setState({
            makanan : nama_makanan
        })
    }
    render() {
        return (
            <div>
                <h2>State Props</h2>
                <h2>{this.state.makanan}</h2>
                <button onClick={() => this.gantiMakanan("soto")} >Ganti makan</button>
                <Operan makanan={this.state.makanan } gantiMakanan={this.gantiMakanan} /> 
            </div>
        )
    }
}
