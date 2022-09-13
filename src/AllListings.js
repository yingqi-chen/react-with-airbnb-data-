import React from 'react'
import ListingCard from './ListingCard'

const AllListings = ({allListings}) => {
  return (
    allListings.length>0 ? allListings.map(listing => <ListingCard key={listing.id} listing={listing}/>) : null
  )
}

export default AllListings