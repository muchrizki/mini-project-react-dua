import axios from "axios"
import { useState } from "react"


const useFetchUserData = () =>  {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalPage, setTotalPage] = useState(0)

    const fetchUsers = (page) => {

        axios.get(`https://reqres.in/api/users?page=${page}`)
        .then (res => {
            setUsers(res.data.data)
            setTotalPage(res.data.total_pages)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

    }

    return { users, loading, totalPage, fetchUsers }

}


export default useFetchUserData