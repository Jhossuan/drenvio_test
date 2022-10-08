
const Button = ({type, disabled, onClick, label}) => {
  return (
    <button 
        type={type} disabled={disabled} onClick={onClick}
        className='px-4 py-2 rounded-3xl shadow-lg bg-blue-500 hover:bg-blue-600 text-white text-sm'
    >
        {label}
    </button>
  )
}

export default Button