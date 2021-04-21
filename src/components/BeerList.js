import React from "react";
import Beer from "./Beer";

const BeerList = ({beers, onBeerClick}) => {

    const beersItems = beers.map((beer) => {
        return <Beer beer={beer} key={beer.id} onBeerClick={onBeerClick}/>
    })

    return(
        <div>
        <ul>
        {beersItems}
        </ul>
        </div>
    )
}


export default BeerList;