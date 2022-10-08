import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { saveData } from "../context/appSlice"
import axios from "axios"
import UserInfo from "./UserInfo"
import User from "./User"

const Perfil = () => {

    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const getUser = async() => {
        setLoading(true)
        const res = await axios.get(`https://randomuser.me/api`)
        setUserData(res.data.results)
        dispatch(saveData(res.data.results))
        setLoading(false)
    }

    useEffect(()=> {
        getUser()
    },[])

  return (
    <div className={`min-h-screen flex flex-col items-center sm:pt-16 pt-12 text-gray-900 ${loading && 'animate-pulse'}`}>
        {
            userData.map((user, index) => {
                const {picture, name, email, gender, registered, location, phone, cell, dob} = user;
                return (
                    <div key={index+1} className='xl:w-2/3 md:w-9/12 sm:w-11/12 w-full'>
                    <User picture={picture} name={name} email={email} gender={gender} registered={registered} location={location} getUser={getUser} phone={phone} />
                    <UserInfo phone={phone} email={email} cell={cell} dob={dob} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Perfil