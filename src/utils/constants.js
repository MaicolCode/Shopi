export const checkLocalStorage = (setterAccount, setterSignOut) => {
  const accountLocalStorage = localStorage.getItem('account')
  const signoutLocalStorage = localStorage.getItem('sign-out')

  let parsedAccount
  let parsedSignOut

  if (!accountLocalStorage) {
    localStorage.setItem('account', '{}')
    parsedAccount = {}
    setterAccount(parsedAccount)
  } else {
    parsedAccount = JSON.parse(accountLocalStorage)
    setterAccount(parsedAccount)
  }

  if (!signoutLocalStorage) {
    localStorage.setItem('sign-out', false)
    parsedSignOut = false
    setterSignOut(parsedSignOut)
  } else {
    parsedSignOut = JSON.parse(signoutLocalStorage)
    setterSignOut(parsedSignOut)
  }
}
