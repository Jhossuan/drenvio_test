import { useState } from "react"
import { HiMenuAlt3, HiMenu } from 'react-icons/hi'
import { MdOutlineScreenSearchDesktop } from 'react-icons/md'
import { useSelector } from "react-redux"

const Navbar = () => {

    const [active, setActive] = useState(false)

    //Para obtener la data del contexto global (redux)
    const data = useSelector((state) => state.global.userdata)
    const userThumbnail = data.map((user) => user.picture.thumbnail)
    const username = data.map((user) => user.login.username)


  return (
      <div>
        <div className={`flex md:p-0 p-2 md:justify-around md:shadow-none justify-between items-center fixed bg-gray-800 text-gray-300 w-screen  transition-all duration-500 `} style={{backdropFilter:'blur(1px)', zIndex:'999'}}>
            <div className={`flex md:flex-row md:items-center items-start md:text-gray-300 text-gray-100 font-semibold text-md p-3 flex-col md:relative absolute md:top-auto md:left-auto md:right-auto md:transition-none transition-all duration-300 ease-in ${active ? 'top-[48px]':'top-[-490px]'} left-0 right-0 gap-6 md:bg-transparent md:bg-gray-800 bg-gray-800`}>
                <a href="#" className="cursor-pointer hover:underline" onClick={()=>setActive(false)}>Inicio</a>
                <a href="#" className="cursor-pointer hover:underline" onClick={()=>setActive(false)}>Mi perfil</a>
            </div>
            <div className="md:hidden">
                <HiMenu className={`text-3xl cursor-pointer mr-2 transition-all duration-500 ${active && 'rotate-90'}`} onClick={()=>setActive(!active)} />
            </div>
            <div className="flex items-center">
                <a href="#" onClick={()=>setActive(false)}>
                    <p className="font-semibold text-gray-200 text-md">{username}</p>
                </a>
                <div className="ml-3 mr-4">
                    <img src={userThumbnail} alt="user" className="rounded-full w-8" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar