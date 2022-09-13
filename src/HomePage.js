import React, { useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button'
import AllListings from './AllListings'



const HomePage = () => {
    const [listings, setListings] = useState([])
    const getListings = async () => { 
        try {
            await axios.get("http://localhost:8080/listings")
            .then((res)=>setListings(res.data.content))
        }catch(error){
            console.error(error)
        }
     }
    
  return (
    <>
    <h1>Airbnb data</h1>
    <Button onClick={getListings} variant="contained">Fetch Airbnb data</Button>
    <AllListings allListings={listings}/>
    </>
  )
}


export default HomePage;