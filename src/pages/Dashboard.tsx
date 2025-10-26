import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import {CreateContentModel} from "../components/ui/CreateContentModel"
import {Sidebar} from "../components/ui/Sidebar"
import { useState } from "react"
function DashBoard() {
  const [modalOpen,setModalOpen] =useState(true);
  return (<div>
      <Sidebar />
      <div className='p-4 ml-72 min-h-screen bg-gray-400 border-2' >
      <CreateContentModel  open={modalOpen} onClose={()=>{
        setModalOpen(false);
      }}/>
      <div className='flex justify-end gap-4'>
         <Button onClick={()=>{
          setModalOpen(true)}} startIcon={<PlusIcon size='lg'/>} variant='secondary' text='ADD content' size='md' />
        <Button  startIcon={<ShareIcon size='lg' />} variant='primary' text='Share brain' size='md' />
      </div>
   
      <div className='flex gap-8  '>
        <Card type='twitter' link='https://x.com/aditiloves29/status/1980269464030716006' title='first tweet'/>
        <Card type='youtube' link='https://www.youtube.com/watch?v=t7uQsSQkeAQ' title='first video' /> 
      </div>
    </div>
  </div>
    
    
  )
}

export default DashBoard