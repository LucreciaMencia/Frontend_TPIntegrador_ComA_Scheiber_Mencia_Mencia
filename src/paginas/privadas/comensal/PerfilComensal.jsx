import { BarraDeNavComensal } from '../../../navBar/Index'
import { obtenerComensal } from '../../../api/comensal/index'
import { useEffect, useState } from 'react'


function PerfilComensal() {

  const token = sessionStorage.getItem('token')

  obtenerComensal()

  return (
    <>
    <nav>
    <BarraDeNavComensal/>
    </nav>
    <br></br>
      <div className='container justify-content-center align-items-center vh-100 bg-white'>
        <div className='row'>
        </div>
      </div>
    </>
  )
}

export default PerfilComensal