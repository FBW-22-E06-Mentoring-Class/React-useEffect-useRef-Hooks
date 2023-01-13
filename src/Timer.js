import React,{useState, useEffect} from 'react'

export default function Timer() {

    const [time,setTime] = useState(new Date().toTimeString())

    useEffect(()=>{
        //componentDidMount // execute once 
        console.log("component is mounted")
       let interval = setInterval(()=>{
            console.log("running....")
            setTime(new Date().toTimeString())
        },1000) 

        //react execute this function on unmount
        return ()=>{
                clearInterval(interval)
        }

    },[]) 



    

  return (
    <div>Timer : {time} </div>
  )
}
