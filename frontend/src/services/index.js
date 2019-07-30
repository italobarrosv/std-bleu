import axios from 'axios'

const api = () =>
  axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/all/USD-BRL',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: `Bearer ${store.state.token}`
    },
    transformResponse: [
      (data) => {
        data = JSON.parse(data)
        return data
      }
    ],
    timeout: 60000
  })

  export const getPrice = data => api().get('/getPrice', data)