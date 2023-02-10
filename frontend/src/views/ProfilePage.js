import React,{useState} from 'react'
import Kevin from '../../src/views/Kevin.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function ProfilePage(){
  const [selectPost,setSelectPost]=useState(true)
  const [selectSaved,setSelectSaved]=useState(false)
  const [selectTagged,setSelectTagged]=useState(false)
  return (
    <div className='flex flex-col px-4 pt-4'>
        <div className='flex flex-row py-5 pl-10'>
              <div className='flex justify-center basis-1/5 '>
                <img src={Kevin} className='h-36 w-36 rounded-full'/>
              </div>
                

                <div className='flex flex-col basis-4/5'>
                  <div className='flex flex-row items-center pl-24'>
                      <div className='text-xl mr-6'>
                        username
                      </div>

                      <button className='translation hover:bg-gray-300 bg-gray-100 mr-6 font-normal rounded-lg h-8 w-28 text-md'>
                        Edit profile
                      </button>

                      <button>
                        <FontAwesomeIcon className="h-5 w-5 mr-4" icon={solid('gear')}/>
                      </button>  
                  </div>

                  <div className='flex flex-row items-center pl-24 space-x-10 pt-6'>
                      <div>
                        <button className='flex flex-row'>
                          <p className='font-medium mr-1'>100</p> 
                          post
                        </button>
                      </div>

                      <div>
                        <button className='flex flex-row'>
                          <p className='font-medium mr-1'>100</p> 
                          follower
                        </button>
                      </div>

                      <div>
                        <button className='flex flex-row'>
                          <p className='font-medium mr-1'>100</p> 
                           following
                        </button>
                      </div>
                  </div>

                  <div className='pt-5 pl-24'>
                    Deskripsi
                  </div>
            </div>
        </div>

        <div className='flex flex-col w-full border-t border-t-gray-200 mt-5'> 
            <div className='flex flex-row w-full space-x-16 justify-center'>
              <button className={selectPost ? 'flex items-center text-xs font-semibold pt-2 border-t border-t-black' : 'flex items-center text-xs text-gray-400 font-semibold pt-2'} onClick={()=>{setSelectPost(true);setSelectSaved(false);setSelectTagged(false)}}>
                <FontAwesomeIcon className="h-3 w-3 mr-2" icon={solid('table-cells')}/>
                POSTS
              </button>

              <button className={selectSaved ? 'flex items-center text-xs font-semibold pt-2 border-t border-t-black' : 'flex items-center text-xs text-gray-400 font-semibold pt-2'} onClick={()=>{setSelectPost(false);setSelectSaved(true);setSelectTagged(false)}}>
                <FontAwesomeIcon className="h-3 w-3 mr-2" icon={solid('bookmark')}/>
                SAVED
              </button>

              <button className={selectTagged ? 'flex items-center text-xs font-semibold pt-2 border-t border-t-black' : 'flex items-center text-xs text-gray-400 font-semibold pt-2'} onClick={()=>{setSelectPost(false);setSelectSaved(false);setSelectTagged(true)}}>
                <FontAwesomeIcon className="h-3 w-3 mr-2" icon={solid('id-card-clip')}/>
                TAGGED
              </button>
            </div>

            {
              selectPost
              ?
              <div className='grid grid-cols-3 gap-6 mt-3'>
                <div className='flex items-center'><img src={Kevin} className='h-64 w-60'/></div>
                <div className='flex items-center'><img src={Kevin} className='h-64 w-60'/></div>
                <div className='flex items-center'><img src={Kevin} className='h-64 w-60'/></div>
                <div className='flex items-center'><img src={Kevin} className='h-64 w-60'/></div>
                <div className='flex items-center'><img src={Kevin} className='h-64 w-60'/></div>
              </div>
              :
              selectSaved
              ?
              <div>
                This is saved
              </div>
              :
              selectTagged
              ?
              <div>
                This is tagged
              </div>
              :
              null
            }
            
        </div>
    </div>
  )
}

