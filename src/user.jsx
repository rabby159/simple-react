import { useEffect, useState } from "react"
import Userr from "./userr";

export default function User() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <>
            <h3>Total Users: {users.length}</h3>
            
            {
                users.map(userr => <Userr userr={userr}></Userr>)
            }
        </>
    )

}
