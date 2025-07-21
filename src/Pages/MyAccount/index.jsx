import { useContext, useState } from 'react'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'

function MyAccount() {
  const { account, setAccount } = useContext(ShoppingCartContext)
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(!show)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = {
      email: formData.get('email'),
      name: formData.get('name'),
      password: formData.get('password')
    }

    const newData = {
      ...account,
      ...data
    }

    setAccount(newData)
    localStorage.setItem('account', JSON.stringify(newData))
    setShow(false)
  }
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center min-h-[calc(100vh-80px)] w-full'>
        <h1 className='text-2xl font-bold mb-4'>My Account by Shopi</h1>

        <div className='bg-white p-6 rounded-md shadow-md w-5/12 space-y-5 '>
          <div className='flex justify-end text-xs w-full'>
            <button
              className='p-2 bg-black text-white rounded-md'
              onClick={handleShow}
            >
              {!show ? 'Update my data' : 'Cancel changes'}
            </button>
          </div>
          <form className='flex flex-col space-y-4 ' onSubmit={handleSubmit}>
            <div className='w-full'>
              <label htmlFor='email' className='font-semibold text-sm'>
                Email:{' '}
              </label>
              <input
                name='email'
                id='email'
                type='text'
                disabled={!show}
                className={`text-md rounded-lg border border-zinc-300 my-2 w-full p-2 focus:ring-2 focus:ring-red-400 focus:outline-none focus:border-transparent ${
                  !show && 'text-zinc-700'
                }
                  `}
                defaultValue={account.email}
                readOnly={!show}
              />
            </div>
            <div className='w-full'>
              <label htmlFor='name' className='font-semibold text-sm'>
                Name:{' '}
              </label>
              <input
                name='name'
                id='name'
                type='text'
                disabled={!show}
                className={`text-md rounded-lg border border-zinc-300 my-2 w-full p-2 focus:ring-2 focus:ring-red-400 focus:outline-none focus:border-transparent ${
                  !show && 'text-zinc-700'
                }
                  `}
                defaultValue={account.name}
                readOnly={!show}
              />
            </div>
            <div className='w-full'>
              <label htmlFor='password' className='font-semibold text-sm'>
                Password:{' '}
              </label>
              <input
                name='password'
                id='password'
                type='password'
                disabled={!show}
                className={`text-md rounded-lg border border-zinc-300 my-2 w-full p-2 focus:ring-2 focus:ring-red-400 focus:outline-none focus:border-transparent ${
                  !show && 'text-zinc-700'
                }
                  `}
                defaultValue={account.password}
                readOnly={!show}
              />
            </div>
            <button
              className={`p-3 w-full bg-red-500 text-white rounded-md text-sm ${
                !show && 'opacity-50 cursor-not-allowed'
              }`}
              disabled={!show}
            >
              Editar información
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default MyAccount
