import './src/App.css'
import { Button } from './src/components/ui/Button'
import { Card } from './src/components/ui/Card'
import { PlusIcon } from './src/icons/PlusIcon'
import { ShareIcon } from './src/icons/ShareIcon'

function App() {

  return (
    <div className='p-4' >
      <div className='flex justify-end gap-4'>
         <Button startIcon={<PlusIcon size='lg'/>} variant='secondary' text='ADD content' size='md' />
        <Button  startIcon={<ShareIcon size='lg' />} variant='primary' text='Share brain' size='md' />
      </div>
   
    <div className='flex'>
      <Card type='twitter' link='https://x.com/aditiloves29/status/1980269464030716006' title='first tweet'/>
      <Card type='youtube' link='https://www.youtube.com/watch?v=t7uQsSQkeAQ' title='first video' /> 
    </div>
    </div>
    
  )
}

export default App
