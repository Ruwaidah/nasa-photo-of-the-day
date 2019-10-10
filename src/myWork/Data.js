import axios from "axios"
import React, {useState, useEffect} from "react"
import Title from "./Title"
import Image from "./Image"
import Explanation from "./Explanation";

export default function Mydata() {
  const [waiting, setwaiting] = useState("");
  const [mydata, setmydata] = useState([]);
  const myKey = "?api_key=yetUEsfJU2YO1CRWeCW8hWgwBaGEQVvTSSmg5oZm" 
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=yetUEsfJU2YO1CRWeCW8hWgwBaGEQVvTSSmg5oZm`)
    .then( response => {
      setmydata(response.data)
    })
    
    },[])
    useEffect( () => {
      if (!mydata.image && !mydata.hdurl && !mydata.title && !mydata.explanation ) 
          setwaiting("Loading...")
      return () => setwaiting("")           
  },[mydata]) 
    console.log(mydata)
    return (
      <div>
        <h3>{waiting}</h3>
        <Title title = {mydata.title} />
        <h4>{mydata.date}</h4>
        <Image image = {mydata.hdurl} />
        <Explanation explanation = {mydata.explanation} />
      </div>
    )
}

