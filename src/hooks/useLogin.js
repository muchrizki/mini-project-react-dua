import axios from "axios"
import { useState } from "react"

const useLogin = () => {

    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)
    const [ isError, setIsError ] = useState(null)
    const [ status, setStatus ] = useState(null)

    const login = (email, password) => {

        setLoading(true)

        axios
        .post('https://reqres.in/api/login/', {email, password})
        .then(res => {
                // console.log(res)
                setError('Login Success!')
                setIsError(false)
                setUser({email: email, token: res.data.token})
                localStorage.setItem('user', JSON.stringify({email: email, token: res.data.token}))
                setStatus(res.status)
                // console.log(status)
        })
        .catch(err => {
            // console.log(err.response.data.error)
            setError(err.response.data.error)
            setIsError(true)
            localStorage.removeItem('user')

        })
        .finally(() => setLoading(false))
    }

    return {user, loading, error, isError, status, login}
}

export default useLogin