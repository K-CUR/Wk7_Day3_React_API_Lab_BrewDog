import React from "react";

const BeerDetails = ({selectedBeer}) => {

    return(
        <>
        <img src={selectedBeer.image_url} alt={selectedBeer.name}/>
        <p>{selectedBeer.first_brewed}</p>
        <p>{selectedBeer.tag_line}</p>
        <p>{selectedBeer.food_pairing}</p>
        </>
    )
}


export default BeerDetails;