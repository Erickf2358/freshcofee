import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: 'https://fluffy-fortnight-95xp7xjrg5jf9p9r-8000.app.github.dev'
})

export default clienteAxios