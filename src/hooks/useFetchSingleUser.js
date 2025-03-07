import axios from "axios"
import { useState } from "react"

export default function useFetchSingleUser() {

    const [userData, setUser] = useState()
    const fetchSingleUser = (id) => {
        
        axios.get(`https://reqres.in/api/users/${id}`)
        .then(res => {
            setUser(res.data.data)
            // console.log(res.data.data)

        })
        .catch(err => console.log(err))
        .finally(() => {})
    } 

    return { userData, fetchSingleUser }
}