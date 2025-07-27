'use client'
import React, { useState } from 'react';

const Page = () => {
  const [username, setUsername] = useState('')
  return (
    <>
    <h1 className='mb-5 text-2xl font-bold'>Enter your name</h1>
<form>
  <input type='text'
   className='border-2 border-zinc-50 px-4 py-2 text-xl'
   value={username}
   onChange={(e) =>{
    setUsername(e.target.value)
    console.log(username)
   }}
   />
</form>


    </>
  )
}

export default Page;