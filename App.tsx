import './src/App.css'
import { Button } from './src/components/ui/Button'
import { PlusIcon } from './src/icons/PlusIcon'
import { ShareIcon } from './src/icons/ShareIcon'

function App() {

  return (
    <div >
    <Button startIcon={<PlusIcon size='lg'/>} endIcon={<ShareIcon size='lg' />} variant='primary' text='Share' size='sm' />
    <Button variant='secondary' text='Add content' size='md'/>
    <Button variant='secondary' text='ADD content' size='lg' />
    
    </div>
    
  )
}

export default App
