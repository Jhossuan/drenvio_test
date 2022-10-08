import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { TbWorld } from 'react-icons/tb'

const Footer = () => {
  return (
    <div className="p-6 bg-gray-800 mt-10 text-gray-400 text-center">
        <p>Página creada por <span className="text-white">Jhossuan Campos D.</span></p>
        <p>Respuesta a la prueba técnica para <span className="text-white">Dr Envio.</span></p>
        <div className="flex items-center justify-center">
            <a href='https://github.com/Jhossuan/drenvio_test' target='_blank'><BsGithub className='mx-1 text-xl mt-2' /></a>
            <a href='https://www.linkedin.com/in/jhossuan/' target='_blank'><BsLinkedin className='mx-1 text-xl mt-2' /></a>
            <a href='https://testdrenvio.netlify.app' target='_blank'><TbWorld className='mx-1 text-xl mt-2' /></a>
        </div>
    </div>
  )
}

export default Footer