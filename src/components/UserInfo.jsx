import { MdOutlinePermContactCalendar, MdOutlineEmail, MdOutlineVerifiedUser } from 'react-icons/md'
import { BsPhone, BsTelephone } from 'react-icons/bs'
import moment from 'moment'
import { useState } from 'react'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'

const UserInfo = ({phone, email, cell, dob}) => {

  const [active, setActive] = useState(true)

  return (
    <div className="w-full text-gray-100 mt-3 mb-8">
      <div className={`flex items-center justify-between bg-gray-800 px-8 py-4 sm:rounded-md ${!active && 'animate-pulse'}`}>
        <p className="text-xl font-semibold">Información General</p>
        <div className="p-2 rounded-full mr-1 shadow-lg bg-blue-500 hover:bg-blue-600 text-white cursor-pointer" onClick={()=>setActive(!active)}>
            {active ?
            <BiUpArrow className="text-xl" />
              : <BiDownArrow className="text-xl" />
            }
        </div>
      </div>
      {
        active &&
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2">

        <div className="my-5 w-full bg-gray-800 sm:rounded-md  h-full">

          <div className="flex flex-col mt-3 px-8 py-4">
            <p className='text-xl flex items-center mb-3 font-semibold'><MdOutlinePermContactCalendar className='mr-2 text-white' />Contacto</p>
            <span className='border border-gray-500 w-full'/>
            <div className='mt-4 flex flex-col'><span className='flex items-center mb-1'><BsTelephone className='mr-1' /> Teléfono:</span> <span>{phone}</span></div>
            <div className='mt-4 flex flex-col'><span className='flex items-center mb-1'><BsPhone className='mr-1' /> Célular:</span> <span>{cell}</span></div>
            <div className='mt-4 flex flex-col'><span className='flex items-center mb-1'><MdOutlineEmail className='mr-1' /> Email:</span> <span>{email}</span></div>
          </div>

        </div>

        <div className="my-5 w-full  bg-gray-800 sm:rounded-md h-full">
        <div className="flex flex-col mt-3 px-8 py-4">
            <p className='text-xl flex items-center mb-3 font-semibold'><MdOutlineVerifiedUser className='mr-2 text-white' />Información personal</p>
            <span className='border border-gray-500 w-full'/>
            <div className='mt-4 flex flex-col'><span className='flex items-center mb-1'>Edad:</span> <span>{dob.age} años</span></div>
            <div className='mt-4 flex flex-col'><span className='flex items-center mb-1'>Fecha de nacimiento:</span> <span>{moment(dob.date).format('LL')}</span></div>
          </div>
        </div>

      </div>
      }
    </div>
  )
}

export default UserInfo