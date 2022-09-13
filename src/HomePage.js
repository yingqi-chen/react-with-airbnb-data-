import React from 'react'
import axios from 'axios'
import Button from '@mui/material/Button'



const HomePage = () => {
    const getListings = async () => { 
        try {
            await axios.get("http://localhost:8080/listing/10021707")
            .then((res)=>console.log(res.data))
        }catch(error){
            console.error(error)
        }
     }
    
  return (
    <>
    <h1>Airbnb data</h1>
    <Button onClick={getListings} variant="contained">Fetch Airbnb data</Button>
    </>
  )
}


export default HomePage;