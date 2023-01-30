import React from 'react'
import { Link,Outlet,useNavigate,useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import logo from '../../src/logo.png'

export default function HomePage(){
  const navigate = useNavigate()
  return (
    <div className='flex flex-row space-x-10'>
        <nav className='flex flex-col'>
          <img src={logo} className='w-24'/>
        </nav>

        <div>
          Content
        </div>
    </div>
  )
}
