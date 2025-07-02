import { useContext, useState } from 'react'
import Layout from '../../Components/Layout'
import { useNavigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'

function SignUp() {
  const { setSignOut, account, setAccount } = useContext(ShoppingCartContext)
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí podrías agregar lógica para guardar el usuario, por ejemplo en localStorage
    localStorage.setItem('account', JSON.stringify(form))
    setAccount(form)
    // Redirigir al usuario a la página de inicio de sesión o home
    navigate('/')
    // Cambiamos el estado del signOut para que muestre el navbar completo
    setSignOut(false)
    localStorage.setItem('sign-out', false)
  }

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center w-full min-h-[calc(100vh-80px)] p-5'>
        <form
          onSubmit={handleSubmit}
          className='w-4/5 max-w-md p-6 bg-white rounded-lg shadow-md flex flex-col items-center gap-2 text-sm'
        >
          <h1 className='text-2xl font-bold text-center'>
            Bienvenido a <span className='text-red-500 text-3xl'>Shopi</span>
          </h1>
          <h2 className='text-base text-center'>
            Crea una cuenta para continuar
          </h2>
          <div className='w-full my-4 flex flex-col gap-2'>
            <div className='w-full space-y-2 my-2'>
              <label htmlFor='name' className='text-zinc-500 font-medium'>
                Nombre
              </label>
              <input
                id='name'
                name='name'
                type='text'
                placeholder='Tu nombre'
                value={form.name}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 ease-out'
              />
            </div>
            <div className='w-full space-y-2 my-2'>
              <label htmlFor='email' className='text-zinc-500 font-medium'>
                Correo electrónico
              </label>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='Correo electrónico'
                value={form.email}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 ease-out'
              />
            </div>
            <div className='w-full space-y-2 my-2'>
              <label htmlFor='password' className='text-zinc-500 font-medium'>
                Contraseña
              </label>
              <input
                id='password'
                name='password'
                type='password'
                placeholder='Contraseña'
                value={form.password}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 ease-out'
              />
            </div>
          </div>
          <div className='w-full px-2'>
            <button
              type='submit'
              className='w-full py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition-all duration-200'
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default SignUp
