import React from 'react'
import Daily from '../image/pt1.png'
import Liput from '../image/pt2.png'
import Yahoo from '../image/pt3.png'
import Cnn from '../image/pt4.png'
import Merdeka from '../image/pt5.jpeg'

function LogoHome() {
  return (
    <div className='mt-5 text-center'>
       <div className='liput '>
        <h1 className='title-liput mt-5'>Diliput Oleh</h1>
      <div className='logoliputan'>
        <a href='#'  alt='tes'>
          <img src={Daily} alt='logo' className='liputlogo' />
        </a>
        <a href='#'  alt='tes'>
          <img src={Liput} alt='logo' className='liputlogo' />
        </a>
        <a href='#'  alt='tes'>
          <img src={Yahoo} alt='logo' className='liputlogo' />
        </a>
        <a href='#' alt='tes'>
          <img src={Cnn} alt='logo' className='cnn' />
        </a>
        <a href='#' alt='tes'>
          <img src={Merdeka} alt='logo' className='liputlogo' />
        </a>
        </div>
      </div>
   </div>
  )
}

export default LogoHome