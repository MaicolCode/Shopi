import { useContext } from 'react'
import Layout from '../../Components/Layout'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'

function SignIn() {
  const { setSignOut, account, setAccount } = useContext(ShoppingCartContext)
  const { email, password } = account

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()

    const form = new FormData(e.target)

    const email = form.get('email')
    const password = form.get('password')

    const data = {
      email,
      password
    }

    setAccount(data)
    localStorage.setItem('account', JSON.stringify(data))
    // Nos redirigimos la home al hacer login
    navigate('/')
    // El estado del singOut cambia debido al inicio de sesion
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
            Bienvenido de Vuelta
          </h1>
          <div className='w-full my-8 flex flex-col gap-2'>
            <div className='w-full space-y-2 my-2'>
              <label htmlFor='email' className='text-zinc-500 font-medium'>
                Correo electrónico
              </label>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='Correo electrónico'
                defaultValue={email}
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
                defaultValue={password}
                required
                className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 ease-out'
              />
              <div className='flex justify-end'>
                <Link
                  to='/forgot-password'
                  className='hover:text-red-500 transition-colors duration-200 ease-in-out'
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full px-2'>
            <button
              type='submit'
              disabled={Object.keys(account)?.length == 0}
              className='disabled:bg-zinc-600 w-full py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition-all duration-200'
            >
              Iniciar Sesión
            </button>
          </div>
          <div className='w-full flex flex-col items-center my-4 gap-3 text-black-600'>
            <p className='w-full text-center'>
              ¿No tienes un usuario aun?
              <Link
                to='/sign-up'
                className='w-full ml-1 font-semibold hover:text-red-500 transition-colors duration-200'
              >
                Registrate
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default SignIn
