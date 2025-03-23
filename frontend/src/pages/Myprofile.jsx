import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Myprofile = () => {

  const [userData, setuserData] = useState({
    name: "Edward Vincent",
    Image: assets.profile_pic,
    email: 'edward@gmail.com',
    phone: '+91 12354 57896',
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Church Road, Ernakulam'
    },
    gender: 'Male',
    dob: "2000-01-20"

  })

  const [Isedit, setIsedit] = useState(false);

  return (
    <div className='max-w-lg flex flex-col gap-3 text-sm'>


      <img className='w-36 rounded' src={userData.Image} alt="" />

      {
        Isedit
          ? <input className='bg-gray-200 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setuserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name} </p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-1.5 mt-3 text-neutral-700'>
          <p className='font-medium my-2'>Email id:</p>
          <p className='text-blue-500 my-2'>{userData.email}</p>
          <p className='font-medium my-2'>Phone:</p>
          {

            Isedit
              ? <input className='bg-gray-100 max-w-48 ' type="text" value={userData.phone} onChange={e => setuserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className='text-blue-400 '>{userData.phone} </p>
          }
          <p className='font-medium my-2'>Address:</p>
          {

            Isedit
              ? <p>
                <input className='bg-gray-50' type="text" onChange={e => setuserData(prev => ({ ...prev, address, line1: e.target.value }))} value={userData.address.line1} />
                <br />
                <input className='bg-gray-50' type="text" onChange={e => setuserData(prev => ({ ...prev, address, line2: e.target.value }))} value={userData.address.line2} />
              </p>
              : <p className='text-gray-500 my-2'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium my-3'>Gender:</p>
          {

            Isedit
              ? <select className='max-w-20 bg-gray-100' onChange={(e) => setuserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p className='text-gray-400 my-3'>{userData.gender} </p>
          }
          <p className='font-medium'>DOB:</p>
          {
            Isedit
              ? <input className='max-w-28 bg-gray-100' type="date" onChange={(e) => setuserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
              : <p className='text-gray-400'>{userData.dob}</p>
          }
        </div>
      </div>
      <div>

        {
          Isedit
            ? <button className=' my-3 border  border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-500' onClick={() => setIsedit(false)} >Save information</button>
            : <button className='my-3 border  border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-500' onClick={() => setIsedit(true)} >Edit</button>
        }
      </div>

    </div>
  )
}

export default Myprofile