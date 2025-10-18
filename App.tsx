import './src/App.css'
import { Button } from './src/components/ui/Button'
import { PlusIcon } from './src/icons/PlusIcon'

function App() {

  return (
    <div>
    <Button startIcon={<PlusIcon size='lg'/>} variant='primary' text='Share' size='sm' />
    <Button variant='secondary' text='Add content' size='md'/>
    <Button variant='secondary' text='ADD content' size='lg' />
    
    </div>
    
  )
}

export default App
