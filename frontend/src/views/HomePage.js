import React,{useState,useEffect} from 'react'
import { Link,Outlet,useNavigate,useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import logo from '../../src/logo.png'

export default function HomePage(){
  const navigate = useNavigate()
  //useState tombol navigasi
  const [selectHome,setSelectHome]=useState(true)
  const [selectSearch,setSelectSearch]=useState(false)
  const [selectExplore,setSelectExplore]=useState(false)
  const [selectReels,setSelectReels]=useState(false)
  const [selectMessages,setSelectMessages]=useState(false)
  const [selectNotifications,setSelectNotifications]=useState(false)
  const [selectCreate,setSelectCreate]=useState(false)
  const [selectProfile,setSelectProfile]=useState(false)
  const [selectMore,setSelectMore]=useState(false)

  return (
    <div className='flex flex-row space-x-10'>
        <nav className='flex flex-col p-9 justify-start basis-1/5'>
          <div className='pt-3 mb-9'>
            <img src={logo} className='w-24'/>
          </div>
          
          <div className='flex flex-col space-y-7 '>
            <button 
              className={selectHome ? 'flex justify-start items-center font-bold' : 'flex justify-start items-center text-gray-600'}
              onClick={()=>{setSelectHome(true);setSelectSearch(false);setSelectExplore(false);setSelectReels(false);setSelectMessages(false);setSelectNotifications(false);setSelectCreate(false);setSelectProfile(false);setSelectMore(false)}}>
                <FontAwesomeIcon className="h-6 w-6 mr-4" icon={solid('house')}/>Home
            </button>

            <button 
              className={selectSearch ? 'flex justify-start items-center font-bold' : 'flex justify-start items-center text-gray-600'}
              onClick={()=>{setSelectHome(false);setSelectSearch(true);setSelectExplore(false);setSelectReels(false);setSelectMessages(false);setSelectNotifications(false);setSelectCreate(false);setSelectProfile(false);setSelectMore(false)}}> 
              <FontAwesomeIcon className="h-6 w-6 mr-4" icon={solid('magnifying-glass')}/>Search
            </button>

            <button 
              className={selectExplore ? 'flex justify-start items-center font-bold' : 'flex justify-start items-center text-gray-600'}
              onClick={()=>{setSelectHome(false);setSelectSearch(false);setSelectExplore(true);setSelectReels(false);setSelectMessages(false);setSelectNotifications(false);setSelectCreate(false);setSelectProfile(false);setSelectMore(false)}}> 
              <FontAwesomeIcon className="h-6 w-6 mr-4" icon={solid('compass')}/>Explore
            </button>

            <button 
              className={selectReels ? 'flex justify-start items-center font-bold' : 'flex justify-start items-center text-gray-600'}
              onClick={()=>{setSelectHome(false);setSelectSearch(false);setSelectExplore(false);setSelectReels(true);setSelectMessages(false);setSelectNotifications(false);setSelectCreate(false);setSelectProfile(false);setSelectMore(false)}}> 
              <FontAwesomeIcon className="h-6 w-6 mr-4" icon={solid('clapperboard')}/>Reels
            </button>

            <button 
              className={selectMessages ? 'flex justify-start items-center font-bold' : 'flex justify-start items-center text-gray-600'}
              onClick={()=>{setSelectHome(false);setSelectSearch(false);setSelectExplore(false);setSelectReels(false);setSelectMessages(true);setSelectNotifications(false);setSelectCreate(false);setSelectProfile(false);setSelectMore(false)}}> 
              <FontAwesomeIcon className="h-6 w-6 mr-4" icon={solid('location-arrow')}/>Messages
            </button>

            <button 
              className={selectNotifications ? 'flex justify-start items-center font-bold' : 'flex justify-start items-center text-gray-600'}
              onClick={()=>{setSelectHome(false);setSelectSearch(false);setSelectExplore(false);setSelectReels(false);setSelectMessages(false);setSelectNotifications(true);setSelectCreate(false);setSelectProfile(false);setSelectMore(false)}}> 
              <FontAwesomeIcon className="h-6 w-6 mr-4" icon={solid('heart')}/>Notifications            
            </button>

            <button 
              className={selectCreate ? 'flex justify-start items-center font-bold' : 'flex justify-start items-center text-gray-600'}
              onClick={()=>{setSelectHome(false);setSelectSearch(false);setSelectExplore(false);setSelectReels(false);setSelectMessages(false);setSelectNotifications(false);setSelectCreate(true);setSelectProfile(false);setSelectMore(false)}}> 
              <FontAwesomeIcon className="h-6 w-6 mr-4" icon={solid('plus')}/>Create
            </button>

            <button className='flex justify-start items-center'>
              Profile
            </button>
          </div>

          <div className='mt-28'>
          <button 
              className={selectMore ? 'flex justify-start items-center font-bold' : 'flex justify-start items-center text-gray-600'}
              onClick={()=>{setSelectHome(false);setSelectSearch(false);setSelectExplore(false);setSelectReels(false);setSelectMessages(false);setSelectNotifications(false);setSelectCreate(false);setSelectProfile(false);setSelectMore(true)}}> 
              <FontAwesomeIcon  className="h-6 w-6 mr-4" icon={solid('bars')}/>More
            </button>
          </div>
        </nav>

        <div className='basis-4/5'>
          Content
        </div>
    </div>
  )
}
