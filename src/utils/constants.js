export const checkLocalStorage = () => {
  const accountLocalStorage = localStorage.getItem('account')
  const signoutLocalStorage = localStorage.getItem('sign-out')

  let parsedAccount
  let parsedSignOut

  if (!accountLocalStorage) {
    localStorage.setItem('account', '{}')
    parsedAccount = {}
  } else {
    parsedAccount = JSON.parse(accountLocalStorage)
  }

  if (!signoutLocalStorage) {
    localStorage.setItem('sign-out', false)
    parsedSignOut = false
  } else {
    parsedSignOut = JSON.parse(signoutLocalStorage)
  }
}
