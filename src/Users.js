import React,{useState,useEffect} from 'react'

export default function Users() {
    const [users,setUsers] = useState([])
    const [count,setCount] = useState(0)
    const fetchUsers=()=>{
        console.log("fetch function call")
        fetch("https://reqres.in/api/users?page=2")
        .then(res=>res.json())
        .then(result=>{
            console.log(result.data)
            setUsers(result.data)
        })
    }
/* useEffect(()=>{
    //componentDidUpdate //execute each time when the count value get changed
    fetchUsers()

    //componentWillUnmount not work
}, [count]) */


useEffect(()=>{
    //componentDidMount //only once
    fetchUsers()

    //componentWillUnmount 
    // only work with componentDidMount
    // return ()=>{}
}, [])

/* useEffect(()=>{

}, [weather]) */
  return (
    <div>
        <h1>Users Page</h1>
        <button onClick={()=>setCount(count+1)}>increment count : {count}</button>
      {/*   <button onClick={fetchUsers}>FetchUser</button> */}
        <div>
            {users.map(user=>{
                return(
                    <div>
                        <h3>{user.first_name}</h3>
                        <img src={user.avatar}  widtd="200"alt="" />
                    </div>
                )
            })}
        </div>
    </div>
  )
}
