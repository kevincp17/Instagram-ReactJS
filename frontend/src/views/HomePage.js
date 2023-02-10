import React,{useState,useEffect} from 'react'
import { Link,Outlet,useNavigate,useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import logo from '../../src/logo.png'
import wlogo from '../../src/views/white logo.png'
import Kevin from '../../src/views/Kevin.JPG'
import { Popover } from '@headlessui/react'
import Modal from '@mui/material/Modal';

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

  //modal create
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const handleOpenModalCreate = () => setOpenModalCreate(true);
  const handleCloseModalCreate = () => setOpenModalCreate(false);

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
              onClick={()=>{handleOpenModalCreate();setSelectHome(false);setSelectSearch(false);setSelectExplore(false);setSelectReels(false);setSelectMessages(false);setSelectNotifications(false);setSelectCreate(true);setSelectProfile(false);setSelectMore(false)}}> 
              <FontAwesomeIcon className="h-6 w-6 mr-4" icon={solid('plus')}/>Create
            </button>
            <Modal
              open={openModalCreate}
              onClose={handleCloseModalCreate}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className='flex flex-col absolute top-20 left-96 bg-white w-2/5 h-4/6 rounded-lg'>
                <div className='flex justify-center border border-b-gray-200 rounded-t-lg py-2 font-semibold'>
                  Create new post
                </div>

                <div className='flex flex-col items-center'>
                  <FontAwesomeIcon className="h-16 w-16 mt-32" icon={solid('photo-film')}/>

                  <div className='text-2xl my-3'>
                      Drag photos and videos here
                  </div>
                  
                  <button className='mt-2 translation hover:bg-blue-600 bg-blue-500 w-52 h-7 rounded-lg text-white font-semibold'>
                    Select from computer
                  </button>
                </div>
              </div>
            </Modal>

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
              <div className="flex flex-col bg-white rounded-md w-full">
                <div className='flex flex-col border-b-2 border-gray-200'>
                  <button className='translation hover:bg-gray-100 hover:rounded-tr-md hover:rounded-tl-md flex flex-row w-full h-full items-center py-2 pl-4 border-b border-gray-200'><p className='flex justify-start basis-11/12'>Settings</p><FontAwesomeIcon  className="basis-1/12 h-6 w-6 mr-4" icon={solid('gear')}/></button>
                  <button className='translation hover:bg-gray-100 flex flex-row w-full h-full items-center py-2 pl-4 border-b border-gray-200'><p className='flex justify-start basis-11/12'>Saved</p><FontAwesomeIcon  className="h-6 w-6 mr-4" icon={solid('bookmark')}/></button>
                  <button className='translation hover:bg-gray-100 flex flex-row w-full h-full items-center py-2 pl-4 border-b border-gray-200'><p className='flex justify-start basis-11/12'>Switch Appearance</p><FontAwesomeIcon  className="h-6 w-6 mr-4" icon={solid('moon')}/></button>
                  <button className='translation hover:bg-gray-100 flex flex-row w-full h-full items-center py-2 pl-4 border-b border-gray-200'><p className='flex justify-start basis-11/12'>Your Activity</p><FontAwesomeIcon  className="h-6 w-6 mr-4" icon={solid('clock')}/></button>
                  <button className='translation hover:bg-gray-100 flex flex-row w-full h-full items-center py-2 pl-4'><p className='flex justify-start basis-11/12'>Report a Problem</p><FontAwesomeIcon  className="h-6 w-6 mr-4" icon={solid('circle-exclamation')}/></button>
                </div>
                
                <div className='flex flex-col border-t-2 border-gray-200'>
                  <button className='translation hover:bg-gray-100 flex flex-row w-full h-full items-center py-2 pl-4 border-b border-gray-200'>Switch Accounts</button>
                  <button className='translation hover:bg-gray-100 hover:rounded-br-md hover:rounded-bl-md flex flex-row w-full h-full items-center py-2 pl-4'>Log out</button>
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
            <div className='flex flex-col items-center pt-7'>
              <div className='text-md font-semibold'>
                  Suggestions for you  
              </div>

              <div className='flex flex-col border border-gray-200 w-1/2 -px-10 rounded-sm my-3'>
                <div className='flex flex-row h-28'>
                  <div className='flex basis-1/5 items-center justify-center'>
                    <img src={Kevin} className='h-12 w-12 rounded-full'/>
                  </div>

                  <div className='basis-2/5 flex flex-col mt-5'>
                    <div className='font-semibold'>username</div>
                    <div className='text-gray-400'>header</div>
                    <div className='text-xs'>Suggested for you</div>
                  </div>

                  <div className='flex items-center justify-end basis-2/5 pr-5'>
                    <button className='bg-blue-500 w-20 h-8 text-white font-semibold rounded-lg'>Follow</button>
                  </div>
                </div>
              </div>
            </div>
            :
              <Outlet/>
          }

          <div className='flex flex-col items-center space-y-3 text-xs mt-20 text-gray-400'>
                <div className='space-x-5 '>
                  <button>Meta</button>
                  <button>About</button>
                  <button>Blog</button>
                  <button>Jobs</button>
                  <button>Help</button>
                  <button>API</button>
                  <button>Privacy</button>
                  <button>Terms</button>
                  <button>Top Locations</button>
                  <button>Accounts</button>
                  <button>Instagram Lite</button>
                  <button>Contact Uploading & Non-Users</button>
                </div>

                <div className='flex flex-row space-x-7'>
                  <div>Language</div>
                  <div>© 2023 Instagram from Meta</div>
                </div>
          </div>
          
        </div>
    </div>
  )
}
