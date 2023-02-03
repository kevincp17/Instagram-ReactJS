import React,{useState,useEffect} from 'react'
import { Link,Outlet,useNavigate,useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import logo from '../../src/logo.png'
import wlogo from '../../src/views/white logo.png'
import Kevin from '../../src/views/Kevin.JPG'
import { Popover } from '@headlessui/react'

export default function HomePage(){
  const navigate = useNavigate()
  const location=useLocation()
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
        <nav className='flex flex-col p-9 justify-start basis-1/5 border border-r-slate-300'>
          <div className='pt-3 mb-9'>
            <img src={logo} className='w-24'/>
            {/* <img src={wlogo} className='w-24'/> */}
          </div>
          
          <div className='flex flex-col space-y-7 '>
            <Link to='/'>
              <button 
                className={selectHome ? 'flex justify-start items-center font-bold' : 'flex justify-start items-center text-gray-600'}
                onClick={()=>{setSelectHome(true);setSelectSearch(false);setSelectExplore(false);setSelectReels(false);setSelectMessages(false);setSelectNotifications(false);setSelectCreate(false);setSelectProfile(false);setSelectMore(false)}}>
                  <FontAwesomeIcon className="h-6 w-6 mr-4" icon={solid('house')}/>Home
              </button>
            </Link>

            
            <button 
              className={selectSearch ? 'flex justify-start items-center font-bold' : 'flex justify-start items-center text-gray-600'}
              onClick={()=>{setSelectHome(false);setSelectSearch(true);setSelectExplore(false);setSelectReels(false);setSelectMessages(false);setSelectNotifications(false);setSelectCreate(false);setSelectProfile(false);setSelectMore(false)}}> 
              <FontAwesomeIcon className="h-6 w-6 mr-4" icon={solid('magnifying-glass')}/>Search
            </button>

            <Link to='/explore'>
              <button 
                className={selectExplore ? 'flex justify-start items-center font-bold' : 'flex justify-start items-center text-gray-600'}
                onClick={()=>{setSelectHome(false);setSelectSearch(false);setSelectExplore(true);setSelectReels(false);setSelectMessages(false);setSelectNotifications(false);setSelectCreate(false);setSelectProfile(false);setSelectMore(false)}}> 
                <FontAwesomeIcon className="h-6 w-6 mr-4" icon={solid('compass')}/>Explore
              </button>
            </Link>
            
            <Link to='/reel'>
              <button 
                className={selectReels ? 'flex justify-start items-center font-bold' : 'flex justify-start items-center text-gray-600'}
                onClick={()=>{setSelectHome(false);setSelectSearch(false);setSelectExplore(false);setSelectReels(true);setSelectMessages(false);setSelectNotifications(false);setSelectCreate(false);setSelectProfile(false);setSelectMore(false)}}> 
                <FontAwesomeIcon className="h-6 w-6 mr-4" icon={solid('clapperboard')}/>Reels
              </button>
            </Link>
            

            <Link to='/message'>
              <button 
                className={selectMessages ? 'flex justify-start items-center font-bold' : 'flex justify-start items-center text-gray-600'}
                onClick={()=>{setSelectHome(false);setSelectSearch(false);setSelectExplore(false);setSelectReels(false);setSelectMessages(true);setSelectNotifications(false);setSelectCreate(false);setSelectProfile(false);setSelectMore(false)}}> 
                <FontAwesomeIcon className="h-6 w-6 mr-4" icon={solid('location-arrow')}/>Messages
              </button>
            </Link>
            
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

            <Link to='/profile'>
              <button className={selectProfile ? 'flex justify-start items-center font-bold' : 'flex justify-start items-center text-gray-600'}
                onClick={()=>{setSelectHome(false);setSelectSearch(false);setSelectExplore(false);setSelectReels(false);setSelectMessages(false);setSelectNotifications(false);setSelectCreate(false);setSelectProfile(true);setSelectMore(false)}}> 
                <img src={Kevin} className={selectProfile ? 'h-8 w-8 mr-2 rounded-full border-2 border-gray-900' : 'h-8 w-8 mr-2 rounded-full border-2 border-transparent'}/>
                  Profile
              </button>
            </Link>
          </div>

          <div className='mt-28'>
          <Popover className="relative">
            <Popover.Button 
              className={selectMore ? 'flex justify-start items-center font-bold' : 'flex justify-start items-center text-gray-600'}
              onClick={()=>{setSelectHome(false);setSelectSearch(false);setSelectExplore(false);setSelectReels(false);setSelectMessages(false);setSelectNotifications(false);setSelectCreate(false);setSelectProfile(false);setSelectMore(true)}}>
              <FontAwesomeIcon  className="h-6 w-6 mr-4" icon={solid('bars')}/>More
            </Popover.Button>

            <Popover.Panel className="absolute z-10 -mt-96 -ml-4 w-56 drop-shadow-md">
              <div className="flex flex-col bg-white border border-slate-400 rounded-md w-full">
                <div className='flex flex-col border-b-2 border-gray-100'>
                  <button className='flex flex-row w-full h-full items-center py-2 border-b border-gray-200'>Settings<FontAwesomeIcon  className="h-6 w-6 mr-4" icon={solid('gear')}/></button>
                  <button className='flex flex-row w-full h-full items-center py-2 border-b border-gray-200'>Saved<FontAwesomeIcon  className="h-6 w-6 mr-4" icon={solid('bookmark')}/></button>
                  <button className='flex flex-row w-full h-full items-center py-2 border-b border-gray-200'>Switch Appearance<FontAwesomeIcon  className="h-6 w-6 mr-4" icon={solid('moon')}/></button>
                  <button className='flex flex-row w-full h-full items-center py-2 border-b border-gray-200'>Your Activity<FontAwesomeIcon  className="h-6 w-6 mr-4" icon={solid('clock')}/></button>
                  <button className='flex flex-row w-full h-full items-center py-2'>Report a Problem<FontAwesomeIcon  className="h-6 w-6 mr-4" icon={solid('circle-exclamation')}/></button>
                </div>
                
                <div className='flex flex-col border-t-2 border-gray-100'>
                  <button className='flex flex-row w-full h-full items-center py-2 border-b border-gray-200'>Switch Accounts</button>
                  <button className='flex flex-row w-full h-full items-center py-2'>Log out</button>
                </div>
              </div>

              <img src="/solutions.jpg" alt="" />
            </Popover.Panel>
          </Popover>
          </div>
        </nav>

        <div className='basis-4/5'>
          {
            location.pathname==='/'
            ?
            <div>
              This is home
            </div>
            :
            <Outlet/>
          }
          
        </div>
    </div>
  )
}
