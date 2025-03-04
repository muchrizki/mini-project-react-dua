import Password from "antd/es/input/Password";
import axios from "axios";
import { useState } from "react";


export default function useRegister () {

    const [ isError, setIsError ] = useState(null)
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)

    const register = (email, password, confirmPassword) => {

        if(password == confirmPassword) {
            setLoading(true)
        
            axios.post("https://reqres.in/api/register/", {email, password})
            .then(res => {
                // console.log(res)
                setError("Register Success!")
                setIsError(false)
            })
            .catch(err => {
                // console.log(err)
                setIsError(true)
                setError(err.response.data.error)
                // console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
        } else if(password != confirmPassword) {
            
            setIsError(true)

            if(confirmPassword == "") {
                setError("Confirm password must be field!")
            } else {
                setError("Confirm password must be the same as password!")
            }
            
            // console.log(error)
        } 
        

    }

    return { isError, error, loading, register }

}