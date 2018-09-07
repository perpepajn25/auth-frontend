export const fetchLoginUser = (user) => {
  console.log(user)
  const url = 'http://localhost:3000/api/v1/auth'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ user })
  }
  return fetch(url, options)
  .then(resp => resp.json())
}

export const fetchReauthUser = () => {
  const url = 'http://localhost:3000/api/v1/auth'
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.getItem('token')
    }
  }
  return fetch(url, options)
  .then(resp => resp.json())
}
