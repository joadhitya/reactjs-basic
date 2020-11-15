import React, { Component } from 'react'

export default class Operan extends Component {
    render() {
        const {makanan, gantiMakanan} = this.props
        return (
            <div>
                <h1>Operan state jadi props : {makanan} </h1>
                <button onClick={() => gantiMakanan("soto")} >Ganti makan</button>
            </div>
        )
    }
}
