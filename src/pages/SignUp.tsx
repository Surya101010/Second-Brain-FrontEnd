import React, { useRef } from 'react'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import axios from 'axios';
import { BACKEND_URL } from '../Config';
import { data, useNavigate } from 'react-router-dom';

function SignUp() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef =useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    async function signup(){
      const username= usernameRef.current?.value;
      const password = passwordRef.current?.value;
      await axios.post((BACKEND_URL)+"api/v1/signup",{
          username,password
      })
      alert("You have signed up ")
      navigate("/signin")
    }
  return (
    <div className='h-screen w-screen bg-gray-200 flex justify-center items-center'>
        <div className='bg-white rounded-xl border min-w-48 p-8'>
            <Input reference={usernameRef} placeholder='Username'  />
            <Input reference={passwordRef} placeholder='Password' />
            <div className='flex justify-center pt-4'>
                <Button variant='primary' text="Signup" fullwidth={true} loading={false} onClick={signup} />
            </div>
            
        </div>
    </div>
    )
}

export default SignUp