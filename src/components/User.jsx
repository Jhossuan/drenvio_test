import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi"
import { AiOutlineMan, AiOutlineWoman, AiOutlineCalendar, AiOutlinePhone } from 'react-icons/ai'
import Button from "../layouts/Button";

const User = ({picture, name, email, gender, registered, location, getUser, phone}) => {
  return (
    <div className="perfil w-full bg-gray-800 sm:rounded-md h-96 text-gray-100">
        <div className="bg-gray-900 text-gray-300 h-3/6 sm:rounded-t-md p-4 flex flex-col md:justify-end bg_img0 text-right border-2 border-gray-800">
            <p className="md:text-xl text-md font-semibold">👋🏽 Hola, soy!</p>
            <h1 className="md:text-3xl text-2xl font-semibold">{`${name.first} ${name.last}`}</h1>
        </div>

        <img src={picture.large} className='rounded-full absolute top-[10rem] xl:left-[20%] md:left-[16%] sm:left-[10%] left-[3%] border-4 border-gray-800 md:w-36' />
        <p className="text-gray-400 capitalize flex items-center sm:mt-2 mt-3 text-sm xl:ml-[23%] lg:ml-[23%] md:ml-[28%] sm:ml-[30%] ml-[9.5rem]">{gender === 'male' ? <AiOutlineMan className="mr-1 text-blue-400" /> : <AiOutlineWoman className="mr-1 text-pink-400" /> }{gender === 'male' ? 'El / Ellos' : 'Ella / Ellas'}</p>

        <div className="flex flex-col sm:ml-9 ml-4 sm:mt-8 mt-6">
            <h1 className="font-semibold sm:text-2xl text-xl">{`${name.title} ${name.first} ${name.last}`}</h1>
            <p className="sm:text-md text-sm text-gray-300 flex items-center"><HiOutlineMail className="mr-1" />{email}</p>
            <small className="flex items-center"><HiOutlineLocationMarker className="mr-1" />{`${location.country}, ${location.city}`}</small>
            <small className="text-gray-200 sm:mt-[2vh] mt-9 flex items-center"><AiOutlineCalendar className="mr-1" />{registered.age > 0 ? `Se unió hace ${registered.age} ${registered.age === 1 ? 'año' : 'años'}` : 'Se unió hace poco'}</small>
        </div>
        <div className="w-full flex items-center p-3 justify-end mt-[-3rem]">
            <div className="p-2 rounded-full mr-1 shadow-lg bg-blue-500 hover:bg-blue-600 text-white cursor-pointer" title={phone}>
                <AiOutlinePhone className="text-xl" />
            </div>
            <Button label='Conocer más' onClick={getUser} />
        </div>
    </div>
    )
}

export default User;