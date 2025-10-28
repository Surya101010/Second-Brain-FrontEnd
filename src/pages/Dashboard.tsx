import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import {CreateContentModel} from "../components/ui/CreateContentModel"
import {Sidebar} from "../components/ui/Sidebar"
import { useState } from "react"
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../Config'
function DashBoard() {
  const [modalOpen,setModalOpen] =useState(true);
  const contents= useContent();
  return (<div>
      <Sidebar />
      <div className='p-4 ml-72 min-h-screen bg-gray-400 border-2 flex-wrap' >
      <CreateContentModel  open={modalOpen} onClose={()=>{
        setModalOpen(false);
      }}/>
      <div className='flex justify-end gap-4'>
         <Button onClick={()=>{
          setModalOpen(true)}} startIcon={<PlusIcon size='lg'/>} variant='secondary' text='ADD content' size='md' />
        <Button onClick={async()=>{
          const response =await axios.post(`${BACKEND_URL}`+"api/v1/brain/share",{
            share:true
          },{
            headers:{
              "Authorization" : localStorage.getItem("token")
            }
          });
          const shareurl = `http://localhost:5173/share/${response.data.hash}`
          alert(shareurl);
        }} startIcon={<ShareIcon size='lg' />} variant='primary' text='Share brain' size='md' />
      </div>
   
      <div className='flex gap-8  '>
        {contents.map(({type,link,title})=>
          <Card type={type} link={link} title={title}/>
        )}
        
        {/* <Card type='youtube' link='https://www.youtube.com/watch?v=t7uQsSQkeAQ' title='first video' />  */}
      </div>
    </div>
  </div>
    
    
  )
}

export default DashBoard