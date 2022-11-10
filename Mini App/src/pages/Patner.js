import React from 'react'
import Herop from '../image/heropatner.svg'
function Patner() {
  return (
    <div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={Herop} alt='tes' className='heroimg'/>
                </div>
                <div className='col-md-6'>
                    <h3>Kotakode Partnership</h3>
                    <h1>Bersama Membangun Talenta Digital di Indonesia</h1>
                    <h4>Kotakode membuka peluang kolaborasi dengan berbagai institusi untuk mendukung ekosistem digital di Indonesia</h4>
                    <button className='btn btn-success btnpatner'>Gabung Sekarang</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Patner