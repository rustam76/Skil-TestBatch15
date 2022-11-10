import React from 'react'
import Teleg from '../image/legram.svg'
function TeleHome() {
  return (
<div className='tele contentele mb-5'>
    <div className='imgtele'>
      <img src={Teleg} alt='' className='teleimg' />
    </div>
    <div className='texttele'>
        <h1>Gabung Komunitas Telegram Kotakode</h1>
        <p>Kotakode berkolaborasi dengan berbagai pioneer yang inovatif untuk bersama mencapai tujuan yang besar</p>
        <button className='btn btn-warning btntele'>Ikuti Telegram!</button>
    </div>
    </div>
  )
}

export default TeleHome