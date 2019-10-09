import axios from "axios"
import React, {useState, useEffect} from "react"
import Title from "./Title"

export default function Mydata() {
  const [mydata, setmydata] = useState([]);
  const myKey = "?api_key=yetUEsfJU2YO1CRWeCW8hWgwBaGEQVvTSSmg5oZm" 
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=yetUEsfJU2YO1CRWeCW8hWgwBaGEQVvTSSmg5oZm`)
    .then( response => {
      setmydata(response.data)
    })
        // deal with the response data in here
    //     // deal with the error in here
    
    },[])
    console.log(mydata)
    return (
      <div>
        <Title title = {mydata.title} />
      <img src = {mydata.url} />
      <img src = {mydata.hdurl} />
      </div>
    )
}

