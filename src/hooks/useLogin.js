import axios from "axios"
import { useState } from "react"

const useLogin = () => {

    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(null)
    const [ error, setError ] = useState(null)
    const [status, setStatus] = useState(null)

    const login = (email, password) => {

        setLoading(true)

        axios
        .post('https://reqres.in/api/login/', {email, password})
        .then(res => {
                setError(null)
                // console.log(res)
                setUser({email: email, token: res.data.token})
                localStorage.setItem('user', JSON.stringify({email: email, token: res.data.token}))
                setStatus(res.status)
                // console.log(status)
        })
        .catch(err => {
            // console.log(err.response.data.error)
            setError(err.response.data.error)
            localStorage.removeItem('user')

        })
        .finally(() => setLoading(false))
    }

    return {user, loading, error, status, login}
}

export default useLogin