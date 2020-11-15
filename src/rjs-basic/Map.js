import React from 'react'

const makanan = [
    {
        nama: 'sott',
        harga: 500
    },
    {
        nama: 'bakso',
        harga: 200
    },
    {
        nama: 'yan',
        harga: 900
    },
    {
        nama: 'kakun',
        harga: 1500
    },
    {
        nama: 'hehett',
        harga: 500
    },
]

// Reduce
const total_bayar = makanan.reduce((total_harga, makanan) => {
    return total_harga + makanan.harga;
}, 0)

const Map = () => {
    return (
        <div>
            <h2>Mapp</h2>
            <ul>
                {makanan.map((makanan, index) => (
                <li>
                    {index+1} {makanan.nama} - Harga {makanan.harga}
                </li>
                ))}
            </ul>

            <h2>Mapp Filter lebih dari 400</h2>
            <ul>
                {makanan.filter((makanan) => makanan.harga > 500).map((makanan, index) => (
                <li>
                    {index+1} {makanan.nama} - Harga {makanan.harga}
                </li>
                ))}
            </ul>

            <h5>Total Baya{total_bayar}</h5>

        </div>
    )
}

export default Map
