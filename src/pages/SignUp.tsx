import React from 'react'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'

function SignUp() {
  return (
    <div className='h-screen w-screen bg-gray-200 flex justify-center items-center'>
        <div className='bg-white rounded-xl border min-w-48 p-8'>
            <Input placeholder='Username'  />
            <Input placeholder='Password' />
            <div className='flex justify-center pt-4'>
                <Button variant='primary' text="Signup" fullwidth={true} />
            </div>
            
        </div>
    </div>
  )
}

export default SignUp